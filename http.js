const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  if (req.url === '/about') {
    res.end('Welcome to our about page')
  }
})
//Listening on port 5000
server.listen(5000, () => {
  //Destructuring the address and port
  const { address, port } = server.address()
  console.log(`The server is on ${address} and on ${port}`)
})
