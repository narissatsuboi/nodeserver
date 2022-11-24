// Event loop

// Read file async example 
// const { readFile } = require('fs')
// console.log('started a first task')
// readFile('./content/first.txt', 'utf-8', (err, result)=> {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(result);
//     console.log('completed first task');
// })
// console.log('starting next task');

// Set Timeout example 
// // start os process
// console.log('first')
// // cb function
// setTimeout(()=> {console.log('second')},0), console.log('third')
// // completed and exited os process 

// Set Interval example
// setInterval(()=> {console.log('hello world')}, 2000), console.log('i will run first')
// // process stays alive unless
// // kill process with ctrol c or unexpected error

// Server example
// const http = require('http')

// const server = http.createServer((req, res)=>{
//     console.log('request event')
//     res.end('hello world')
// })

// server.listen(5000, ()=>{
//     console.log('server listening on port: 5000')
// })