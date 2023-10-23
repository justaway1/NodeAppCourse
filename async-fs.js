const { readFile, writeFile } = require('fs')

//Async reading from a file.
readFile('./content/firstfile.txt', 'utf8', (error, data) => {
  //if there's an error reading the file
  if (error) {
    console.log(`Error: ${error}`)
    return
  }
  const firstData = data
  console.log(`First data: ${firstData}`)

  readFile('./content/secondFile.txt', 'utf8', (error, data) => {
    if (error) {
      console.log(`Error: ${error}`)
      return
    }
    const secondData = data
    console.log(`Second data: ${secondData}`)

    writeFile(
      './content/resultAsync.txt',
      `Here's the result: ${firstData}, ${secondData}`,
      (error, data) => {
        if (error) {
          console.log(`Error: ${error}`)
          return
        }
        console.log(`Data written to the file: ${data}`)
      }
    )
  })
})
