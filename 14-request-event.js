const http = require('http');

// way 1
// const server = http.createServer((req, res) => {
//     res.end('Send Data')
// })

// way 2
const server = http.createServer();

server.on('reqeust', (req,res) => {
    res.end('Data sent successfully')
})

server.listen(5000);