// OS module 
console.log('OS MODULE')
const os = require('os')

// info about current user 
const user = os.userInfo()
console.log('os.userInfo()')
console.log(user)
console.log()

// sys uptime (seconds computer running)
console.log('os.uptime()')
console.log(`The system uptime in sec is ${os.uptime()}`)
console.log()

// current os info  
const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(), 
    freeMem:os.freemem()
}
console.log('os system info')
console.log(currentOS)
console.log()
