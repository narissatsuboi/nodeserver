// HTTP MODULE
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our homepage')
    }
    if (req.url === '/about') {
        res.end('about us')
    }
    res.end(`<h1>Oops!</h1>`)  // page not found
})

server.listen(55555)
