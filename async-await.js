const { readFile } = require('fs')

//Returning a promise
const getPath = path => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
/**
Retrieves the content of a text file given its path.
 */
const getFile = async () => {
  try {
    const textFile = await getPath('./content/firstfile.txt')
    console.log(textFile)
  } catch (err) {
    console.log(err)
  }
}

getFile()
