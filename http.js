const http = require('http')

//using an EventEmitter API
const server = http.createServer()

server.on('request', (req, res) => {
  res.end('Welcome')
})
//Listening on port 5000
server.listen(5000, () => {
  //Destructuring the address and port
  const { address, port } = server.address()
  console.log(`The server is on ${address} and on ${port}`)
})
