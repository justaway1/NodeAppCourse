// Importing modules
const { fName, sName } = require('./names')
const personName = require('./utils')
const dataPersons = require('./alternative-exports')

//Executing the functions with the imported modules

console.log(dataPersons.singlePerson)

personName(fName)
personName(sName)
