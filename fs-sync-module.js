const { readFileSync, writeFileSync } = require('fs')

//Read from a file
const firstFile = readFileSync('./content/firstfile.txt', 'utf8')
const secondFile = readFileSync('./content/secondFile.txt', 'utf8')

console.log(firstFile, secondFile)

//Writing to a file, if theres no file Node will create one, if there's any text, Node will overwrite it!
writeFileSync(
  './content/resultFile.txt',
  `Here are the results: ${firstFile}, ${secondFile}`
)
