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
//calling the function
getPath('./content/firstfile.txt')
  .then(data => console.log(data))
  .catch(err => console.log(err))
