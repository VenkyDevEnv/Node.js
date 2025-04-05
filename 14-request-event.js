const http = require('http');

const server = http.createServer();

server.on('reqeust', (req,res) => {
    res.end('Data sent successfully')
})

server.listen(5000);
