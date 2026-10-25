const POLL_MS = 2000;
const SCROLLBAR_HIDE_MS = 1200;
const BOTTOM_SLACK_PX = 30;
const FONT_SETTLE_MS = 1000;
const MAX_ROWS = 300;

const root = document.documentElement;
const log = document.getElementById('log');
let lastDay = null;
let lastOffset = -1;
let hideTimer = null;
let pinned = true;
let smooth = false;

function nickColor(nick) {
  let hash = 0;
  for (const c of nick) {
    hash = (hash * 31 + c.codePointAt(0)) % 360;
  }
  return `hsl(${hash} 60% 65%)`;
}

function cell(className, text) {
  const el = document.createElement('div');
  el.className = className;
  if (text !== undefined) {
    el.textContent = text;
  }
  return el;
}

function bang() {
  const el = document.createElement('span');
  el.className = 'bang';
  el.innerHTML = '-<strong>!</strong>- ';
  return el;
}

// Names and times go in as text, only the server-escaped message is HTML
function row(line) {
  const el = cell('work-tr');
  const time = cell('time-td');
  const nick = cell('nick-td');
  const msg = cell('msg-td');

  time.append(Object.assign(document.createElement('span'), { className: 'timestamp', textContent: line.t }));
  nick.style.color = nickColor(line.n);

  if (line.a === 'PRIVMSG') {
    nick.textContent = `<${line.n}>`;
  } else if (line.a === 'ACTION') {
    nick.textContent = `* ${line.n}`;
  } else {
    nick.append(bang(), line.n);
  }

  msg.innerHTML = line.m;
  msg.querySelectorAll('.nick').forEach((span) => {
    span.style.color = nickColor(span.textContent);
  });

  el.append(time, nick, msg);
  return el;
}

async function update() {
  if (document.hidden) {
    return;
  }

  let data;
  try {
    const res = await fetch('irclog.json', { cache: 'no-cache' });
    if (!res.ok) {
      return;
    }
    data = await res.json();
  } catch (e) {
    return;
  }

  if (data.day !== lastDay) {
    lastDay = data.day;
    lastOffset = -1;
  }

  const fresh = data.lines.filter((line) => line.o > lastOffset);
  if (!fresh.length) {
    return;
  }

  log.append(...fresh.map(row));
  lastOffset = fresh[fresh.length - 1].o;

  while (log.childElementCount > MAX_ROWS) {
    log.firstElementChild.remove();
  }

  // Jump on the first render and while web fonts settle, glide after that
  setTimeout(() => {
    smooth = true;
  }, FONT_SETTLE_MS);
}

// Show the scrollbar only while the visitor scrolls, not on programmatic scrolls
function showScrollbar() {
  root.classList.add('scrolling');
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => root.classList.remove('scrolling'), SCROLLBAR_HIDE_MS);
}

// Follow new lines unless the visitor has scrolled up to read
window.addEventListener('scroll', () => {
  if (root.classList.contains('scrolling')) {
    pinned = window.innerHeight + window.scrollY >= root.scrollHeight - BOTTOM_SLACK_PX;
  }
}, { passive: true });

new ResizeObserver(() => {
  if (pinned) {
    window.scrollTo({ top: root.scrollHeight, behavior: smooth ? 'smooth' : 'instant' });
  }
}).observe(log);

['wheel', 'touchmove', 'keydown'].forEach((type) => window.addEventListener(type, showScrollbar, { passive: true }));
document.addEventListener('visibilitychange', update);
update();
setInterval(update, POLL_MS);
