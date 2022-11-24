// FS module
console.log('FS MODULE ASYNC')

const {readFile, writeFile} = require('fs')

// async file read with callback 
readFile('./content/first.txt','utf-8', (err, result)=>{
    if (err) {
        console.log(err);
        return; 
    }
    const first = result 
    readFile('./content/second.txt', 'utf-8', (err)=>{
        if (err) {
            console.log(err);
            return; 
        }
        const second = result 
    })
})