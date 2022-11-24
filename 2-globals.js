// GLOBALS - NO WINDOW like frontend !!! 

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed 

// you can print globals 
console.log(__dirname)

// example of callback with setInterval 
setInterval(()=>{
    console.log('Hello world')
}, 1000)