const os = require('os')

//Info about the user
const user = os.userInfo()
console.log(user)

//Info about the system
const osSystem = {
  name: os.type(),
  release: os.release(),
  totalMem: os.arch(),
  freeMem: os.freemem()
}

console.log(osSystem)
