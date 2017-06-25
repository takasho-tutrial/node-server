const http = require('http')
const fs = require('fs')
const server = http.createServer()

server.on('request', (req, res) => {
  fs.readFile('./template/html/index.html', 'utf-8', (err, html) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.write('not found!')
      return res.end()
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(html)
    res.end()
  })
})

server.listen(8080, '127.0.0.1')
