/**
 * Live #pulina scroller. Listens to /irclog/stream (Server-Sent Events from
 * scripts/irclog-stream.py) and types new messages in like a terminal.
 */
(() => {
  const scroller = document.querySelector('.irc-scroller');
  if (!scroller) {
    return;
  }

  const MAX_ROWS = 200;
  const BOTTOM_SLACK_PX = 30;
  const SCROLLBAR_HIDE_MS = 1200;
  const TYPING_HINT_MS = 500;
  const TYPE_MS_PER_CHAR = 22;
  const TYPE_MAX_MS = 1200;
  const SETTLE_MS = 900;
  const RECONNECT_MS = 10000;
  const TYPED = ['PRIVMSG', 'ACTION'];

  const stream = scroller.dataset.stream;
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lines = document.createElement('div');
  const queue = [];
  let source = null;
  let lastDay = null;
  let lastOffset = -1;
  let busy = false;
  let pinned = true;
  let inView = true;
  let hideTimer = null;

  const wait = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

  function nickColor(nick) {
    let hash = 0;
    for (const c of nick) {
      hash = (hash * 31 + c.codePointAt(0)) % 360;
    }
    return `hsl(${hash} 60% 65%)`;
  }

  function make(tag, className, text) {
    const el = document.createElement(tag);
    el.className = className;
    if (text !== undefined) {
      el.textContent = text;
    }
    return el;
  }

  // The feed is escaped server side. This keeps only plain spans and http(s) links anyway.
  function clean(node) {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        return;
      }

      const href = child.nodeName === 'A' ? child.getAttribute('href') || '' : '';
      const keep = child.nodeName === 'SPAN' || /^https?:\/\//i.test(href);
      if (child.nodeType !== Node.ELEMENT_NODE || !keep) {
        child.replaceWith(document.createTextNode(child.textContent));
        return;
      }

      const classes = [...child.classList].filter((name) => /^irc-[a-z0-9]+$/.test(name));
      [...child.attributes].forEach((attr) => child.removeAttribute(attr.name));
      if (classes.length) {
        child.className = classes.join(' ');
      }
      if (href) {
        Object.assign(child, { href, target: '_blank', rel: 'noopener noreferrer nofollow' });
      }
      clean(child);
    });
  }

  function messageFragment(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    clean(template.content);
    template.content.querySelectorAll('.irc-nick').forEach((span) => {
      span.style.color = nickColor(span.textContent);
    });
    return template.content;
  }

  function row(line) {
    const el = make('div', 'irc-row');
    const from = make('div', 'irc-from');
    const msg = make('div', 'irc-msg');

    from.style.color = nickColor(line.n);
    if (line.a === 'PRIVMSG') {
      from.textContent = `<${line.n}>`;
    } else if (line.a === 'ACTION') {
      from.textContent = `* ${line.n}`;
    } else {
      const bang = make('span', 'irc-bang', '-');
      bang.append(make('strong', '', '!'), '- ');
      from.append(bang, line.n);
    }

    el.append(make('div', 'irc-time', line.t), from, msg);
    return { el, msg };
  }

  function stickToBottom() {
    if (pinned) {
      scroller.scrollTop = scroller.scrollHeight;
    }
  }

  function append(el) {
    lines.append(el);
    while (lines.childElementCount > MAX_ROWS) {
      lines.firstElementChild.remove();
    }
    stickToBottom();
  }

  // "Nimi kirjoittaa viestiä...", then the text types in green behind a pipe cursor,
  // flashes and settles to normal. Anything waiting in the queue skips ahead.
  async function typeIn(msg, fragment, nick) {
    if (!queue.length) {
      msg.append(make('span', 'irc-typing', `${nick} kirjoittaa viestiä`));
      stickToBottom();
      await wait(TYPING_HINT_MS);
    }

    const walker = document.createTreeWalker(fragment, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) {
      texts.push({ node: walker.currentNode, full: walker.currentNode.data });
      walker.currentNode.data = '';
    }

    const total = texts.reduce((sum, t) => sum + t.full.length, 0);
    const perChar = Math.min(TYPE_MS_PER_CHAR, TYPE_MAX_MS / Math.max(total, 1));
    const cursor = make('span', 'irc-cursor');
    cursor.setAttribute('aria-hidden', 'true');
    msg.replaceChildren(fragment, cursor);
    msg.classList.add('is-typing');

    const start = performance.now();
    await new Promise((resolve) => {
      function frame(now) {
        let left = queue.length ? total : Math.min(total, Math.floor((now - start) / perChar));
        texts.forEach((t) => {
          const take = Math.min(left, t.full.length);
          t.node.data = t.full.slice(0, take);
          left -= take;
        });
        stickToBottom();

        if (texts.every((t) => t.node.data.length === t.full.length)) {
          resolve();
          return;
        }
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });

    cursor.remove();
    msg.classList.replace('is-typing', 'is-typed');
    setTimeout(() => msg.classList.remove('is-typed'), SETTLE_MS);
  }

  async function drain() {
    if (busy) {
      return;
    }
    busy = true;

    while (queue.length) {
      const line = queue.shift();
      const { el, msg } = row(line);
      const fragment = messageFragment(line.m);

      el.classList.add('is-new');
      append(el);

      if (calm || document.hidden || !inView || !TYPED.includes(line.a)) {
        msg.append(fragment);
        stickToBottom();
      } else {
        // eslint-disable-next-line no-await-in-loop
        await typeIn(msg, fragment, line.n);
      }
    }

    busy = false;
  }

  function receive(data) {
    const first = lastDay === null;
    if (data.day !== lastDay) {
      lastDay = data.day;
      lastOffset = -1;
    }

    const fresh = data.lines.filter((line) => line.o > lastOffset);
    if (!fresh.length) {
      return;
    }
    lastOffset = fresh[fresh.length - 1].o;

    // History appears at once, only lines arriving while watching are animated
    if (first) {
      fresh.forEach((line) => {
        const { el, msg } = row(line);
        msg.append(messageFragment(line.m));
        append(el);
      });
      return;
    }

    queue.push(...fresh);
    drain();
  }

  function connect() {
    if (source || document.hidden || !inView) {
      return;
    }

    source = new EventSource(stream);
    source.onmessage = (event) => {
      try {
        receive(JSON.parse(event.data));
      } catch (e) {
        // A broken event is skipped, the next one carries the full feed again
      }
    };

    // EventSource retries by itself, this covers the cases where it gives up
    source.onerror = () => {
      if (source.readyState === EventSource.CLOSED) {
        source = null;
        setTimeout(connect, RECONNECT_MS);
      }
    };
  }

  // Hidden or scrolled away scrollers hold no connection, the feed catches up on return
  function disconnect() {
    if (source) {
      source.close();
      source = null;
    }
  }

  function showScrollbar() {
    scroller.classList.add('is-scrolling');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => scroller.classList.remove('is-scrolling'), SCROLLBAR_HIDE_MS);
  }

  // Follow new lines unless the visitor has scrolled up to read
  scroller.addEventListener('scroll', () => {
    if (scroller.classList.contains('is-scrolling')) {
      pinned = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - BOTTOM_SLACK_PX;
    }
  }, { passive: true });

  ['wheel', 'touchmove', 'keydown'].forEach((type) => scroller.addEventListener(type, showScrollbar, { passive: true }));

  // Web fonts and wrapping change heights after render
  scroller.append(lines);
  new ResizeObserver(stickToBottom).observe(lines);

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) {
      connect();
    } else {
      disconnect();
    }
  }).observe(scroller);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      disconnect();
    } else {
      connect();
    }
  });
})();
