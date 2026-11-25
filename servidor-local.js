// Servidor local para testar o site no mesmo endereço do GitHub Pages:
//   node servidor-local.js   ->   http://localhost:8080/vin-cola-/
const http = require('http'), fs = require('fs'), path = require('path');

const ROOT = __dirname;
const PORT = 8080;
const BASE = '/vin-cola-/';
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml',
};

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') { res.writeHead(302, { Location: BASE }); return res.end(); }
  if (!url.startsWith(BASE)) { res.writeHead(404); return res.end('Não encontrado'); }

  let file = path.join(ROOT, url.slice(BASE.length));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  try { if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html'); } catch (e) {}

  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Não encontrado'); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Site no ar em http://localhost:${PORT}${BASE}`));
