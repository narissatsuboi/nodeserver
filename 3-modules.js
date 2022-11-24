// CommonJs, every file in node is a module by default
// Modules, encapsulated code 

// always start with ./ 
const names = require('./4-names')
const sayHi = require('./5-utils')
const bob = require('./6-altsyntax')
// console.log(bob)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


// mind grenade - run the module straight out
// in 7-mindgrenade, we write a function and call it
// in this file, we just require it, and the function runs! 
require('./7-mindgrenade')