
const http = require('http');
const app = require('./index');

const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, () => {
    // console.log(`Server is listening on port number: ${port}`);
    const url = `http://127.0.0.1:${port}`
    console.log(`Link: ${url}`);
});