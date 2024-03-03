const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    const urlToParse: string = req.url || ''
    
    const parsedUrl = url.parse(urlToParse, true)
    console.log(parsedUrl);

    // properties on url module
    const path = parsedUrl.pathname || '';
    const host = parsedUrl.host || '';
    const hostname = parsedUrl.hostname || '';
    const query = parsedUrl.query || '';
    const search = parsedUrl.search || '';
    // const origin = parsedUrl.origin;
    const protocol = parsedUrl.protocol || '';
    const port = parsedUrl.port || '';
    const auth = parsedUrl.auth || '';
    const href = parsedUrl.href || '';
    const slashes = parsedUrl.slashes || '';

    res.writeHead(200, {
        "Content-Type": "text/plain"
    })
    res.end(`Path: ${path}\nProtocol: ${protocol}\nHost: ${host}\nHostname: ${hostname}\nPort: ${port}\nSearch: ${search}\nQuery: ${JSON.stringify(query)}\nAuth: ${auth}\nSlashes: ${slashes}\nHref: ${href}\n`);
})

const PORT: number = 4407;
const IP: string = '127.0.0.1';

server.listen( PORT, IP, () => {
    console.log(`node server is running on ${IP}'s port ${PORT}`);
})