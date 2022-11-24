// FS module
console.log('FS MODULE SYNC')

const {readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log('readFileSync first.txt')
console.log(first)
console.log()
console.log('readFileSync second.txt')
console.log(second)
console.log()

console.log('Combine first.txt and second.txt into result-sync.txt');
writeFileSync(
    './content/result-sync.txt', 
    `heres the result: ${first}, ${second}`
)
console.log()
console.log(readFileSync('./content/result-sync.txt', 'utf-8'))
console.log()

console.log('Append I LOVE GEO to the file')
writeFileSync(
    './content/result-sync.txt', 
    `I LOVE GEO`, {flag: 'a'}
)
console.log()
console.log(readFileSync('./content/result-sync.txt', 'utf-8'))
console.log()
