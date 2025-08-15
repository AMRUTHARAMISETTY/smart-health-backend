const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if(reqUrl.pathname === '/process' && req.method === 'GET') {
        const name = reqUrl.query.name || "Guest";
        const age = reqUrl.query.age || "unknown";
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Hello, ${name}! Your age is ${age}.`);
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Backend working');
    }
});

server.listen(5000, () => console.log('Server running on port 5000'));
