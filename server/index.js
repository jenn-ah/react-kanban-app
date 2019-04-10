const http = require('http');
const server = require('./server');
const PORT = process.env.EXPRESS_HOST_PORT;

http.createServer(server).listen(PORT, () => {
    process.stdout.write(`Express server listening on port: ${PORT}`);
});