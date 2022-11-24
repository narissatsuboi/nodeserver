// PATH module
console.log('PATH MODULE')

const path = require('path') 

// get platform's separator 
console.log(`Platform separator with path.sep`)
console.log(`Platform separator = ${path.sep}`)
console.log()

// join sequence of path segments, return normalized resultant path
const filepath = path.join('/content/', '/subfolder', 'test.txt')
console.log('Join file paths of content folder...');
console.log(filepath)
console.log()

console.log('Get base name only')
const base = path.basename(filepath)
console.log(base)
console.log()

// absolute path 
console.log('Get absolute path')
const absolute = path.resolve(__dirname)
console.log(absolute)
console.log()
