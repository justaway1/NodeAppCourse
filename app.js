const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//Async reading from a file.
const getFile = async () => {
  try {
    const firstFile = await readFilePromise('/content/firstfile.txt', 'utf8')
    const secondFile = await readFilePromise('./content/secondFile.txt', 'utf8')
    console.log(firstFile, secondFile)
  } catch (err) {
    console.log(err)
  }
}

getFile()
