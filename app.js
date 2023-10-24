const { readFile } = require('fs')

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

getPath('./content/firstfile.txt')
  .then(data => console.log(data))
  .catch(err => console.log(err))
