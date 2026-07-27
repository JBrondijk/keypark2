const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const requestedPort = Number(process.env.PORT || 4200);
const rootDir = path.join(__dirname, 'docs');
const indexFile = path.join(rootDir, 'index.html');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

function sendFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Internal Server Error');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${host}:${requestedPort}`);
  let pathname = decodeURIComponent(requestUrl.pathname);

  if (pathname === '/') {
    sendFile(indexFile, res);
    return;
  }

  const safePath = path.resolve(rootDir, `.${pathname}`);
  const relativeToRoot = path.relative(rootDir, safePath);
  const isWithinRoot = relativeToRoot && !relativeToRoot.startsWith('..') && !path.isAbsolute(relativeToRoot);

  if (isWithinRoot && fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
    sendFile(safePath, res);
    return;
  }

  sendFile(indexFile, res);
});

function listenOnPort(port) {
  server.listen(port, host, () => {
    console.log(`SPA server listening on http://${host}:${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy; trying ${port + 1}...`);
      server.close();
      listenOnPort(port + 1);
      return;
    }

    throw err;
  });
}

listenOnPort(requestedPort);
