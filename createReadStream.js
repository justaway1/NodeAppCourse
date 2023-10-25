const { writeFileSync, createReadStream } = require('fs')

// write 10000 /Hello World/ Words in the file.
for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', 'Hello World\n', { flag: 'a' })
}
//Reads the file in chunks
//highwatermark is the number of bytes to read from the file default is 65000
const stream = createReadStream('../content/big.txt', {
  highWaterMark: 1000000
})

//Using the stream
stream.on('data', result => {
  console.log(result)
})

//Error event
stream.on('error', err => {
  console.log(err)
})
