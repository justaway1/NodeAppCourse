const http = require('http')
const { createReadStream } = require('fs')

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', error => {
      res.end(error)
    })
  })
  .listen(5000)
