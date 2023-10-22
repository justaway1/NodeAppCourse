const path = require('path')

//Path Seperator
console.log(path.sep)

//Join path folders
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//Base name - the last file name
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
