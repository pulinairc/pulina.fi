#!/usr/bin/env python3
"""Pushes irclog.json to browsers as Server-Sent Events the moment it changes.

Runs behind nginx at /irclog/stream. Every client gets the current feed on connect
and again after each rebuild by irclog.php. Stdlib only, needs inotify-tools.
"""

import asyncio
import os

ROOT = '/var/www/pulina.fi/public_html'
FEED_NAME = 'irclog.json'
HOST = '127.0.0.1'
PORT = 8730
MAX_CLIENTS = 500
KEEPALIVE_S = 25
HEADER_TIMEOUT_S = 10

HEADERS = (
    b'HTTP/1.1 200 OK\r\n'
    b'Content-Type: text/event-stream\r\n'
    b'Cache-Control: no-cache\r\n'
    b'X-Accel-Buffering: no\r\n'
    b'Connection: close\r\n\r\n'
    b'retry: 3000\n\n'
)
BUSY = b'HTTP/1.1 503 Service Unavailable\r\nContent-Length: 0\r\nConnection: close\r\n\r\n'

feed = {'data': b'', 'version': 0}
changed = asyncio.Condition()
clients = 0


def read_feed():
    with open(os.path.join(ROOT, FEED_NAME), 'rb') as f:
        return f.read().replace(b'\n', b'')


async def publish():
    async with changed:
        feed['data'] = read_feed()
        feed['version'] += 1
        changed.notify_all()


async def watch():
    proc = await asyncio.create_subprocess_exec(
        'inotifywait', '-mq', '-e', 'moved_to,close_write', '--format', '%f', ROOT,
        stdout=asyncio.subprocess.PIPE,
    )
    async for line in proc.stdout:
        if line.strip() == FEED_NAME.encode():
            await publish()
    raise SystemExit('inotifywait exited')


async def handle(reader, writer):
    global clients

    try:
        await asyncio.wait_for(reader.readuntil(b'\r\n\r\n'), HEADER_TIMEOUT_S)
    except (asyncio.TimeoutError, asyncio.IncompleteReadError, asyncio.LimitOverrunError, ConnectionError):
        writer.close()
        return

    if clients >= MAX_CLIENTS:
        writer.write(BUSY)
        writer.close()
        return

    clients += 1
    seen = -1
    try:
        writer.write(HEADERS)
        while True:
            ping = False
            async with changed:
                if seen == feed['version']:
                    try:
                        await asyncio.wait_for(changed.wait(), KEEPALIVE_S)
                    except asyncio.TimeoutError:
                        ping = True

            if seen != feed['version']:
                seen = feed['version']
                writer.write(b'data: ' + feed['data'] + b'\n\n')
            elif ping:
                writer.write(b': ping\n\n')

            # A client that stops reading is dropped instead of piling up
            await asyncio.wait_for(writer.drain(), KEEPALIVE_S)
    except (ConnectionError, OSError, asyncio.TimeoutError):
        pass
    finally:
        clients -= 1
        writer.close()


async def main():
    await publish()
    server = await asyncio.start_server(handle, HOST, PORT)
    async with server:
        await asyncio.gather(server.serve_forever(), watch())


if __name__ == '__main__':
    asyncio.run(main())
