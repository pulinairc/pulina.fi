/**
 * Live #pulina scroller. Polls the static irclog.json built by irclog.php and types
 * new messages in like a terminal.
 */
(() => {
  const scroller = document.querySelector('.irc-scroller');
  if (!scroller) {
    return;
  }

  const POLL_MS = 2000;
  const MAX_ROWS = 200;
  const BOTTOM_SLACK_PX = 30;
  const SCROLLBAR_HIDE_MS = 1200;
  const TYPING_HINT_MS = 900;
  const TYPE_MS_PER_CHAR = 28;
  const TYPE_MAX_MS = 1800;
  const BACKLOG_INSTANT = 3;
  const TYPED = ['PRIVMSG', 'ACTION'];

  const feed = scroller.dataset.feed;
  const lines = document.createElement('div');
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const queue = [];
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

  // Shows "kirjoittaa viestiä...", then reveals the text one character at a time
  async function typeIn(msg, fragment, nick) {
    const hint = make('span', 'irc-typing', `${nick} kirjoittaa viestiä`);
    msg.append(hint);
    stickToBottom();
    await wait(TYPING_HINT_MS);

    const walker = document.createTreeWalker(fragment, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) {
      texts.push({ node: walker.currentNode, full: walker.currentNode.data });
      walker.currentNode.data = '';
    }

    const total = texts.reduce((sum, t) => sum + t.full.length, 0);
    const perChar = Math.min(TYPE_MS_PER_CHAR, TYPE_MAX_MS / Math.max(total, 1));
    const cursor = make('span', 'irc-cursor is-typing');
    cursor.setAttribute('aria-hidden', 'true');
    hint.replaceWith(fragment);
    msg.append(cursor);

    const start = performance.now();
    await new Promise((resolve) => {
      function frame(now) {
        let left = Math.min(total, Math.floor((now - start) / perChar));
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

    cursor.classList.remove('is-typing');
    await wait(400);
    cursor.remove();
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
      const instant = calm || document.hidden || !inView || queue.length >= BACKLOG_INSTANT || !TYPED.includes(line.a);

      el.classList.add('is-new');
      append(el);

      if (instant) {
        msg.append(fragment);
        stickToBottom();
      } else {
        // eslint-disable-next-line no-await-in-loop
        await typeIn(msg, fragment, line.n);
      }
    }

    busy = false;
  }

  async function poll() {
    if (document.hidden || !inView) {
      return;
    }

    let data;
    try {
      const res = await fetch(feed, { cache: 'no-cache' });
      if (!res.ok) {
        return;
      }
      data = await res.json();
    } catch (e) {
      return;
    }

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
      poll();
    }
  }).observe(scroller);

  document.addEventListener('visibilitychange', poll);
  setInterval(poll, POLL_MS);
})();
