const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// (1) listen for event 
// name of event , callback function 
customEmitter.on('response', (name, id)=> {
    console.log(`data recieved user ${name} with age ${id}`);
})  
customEmitter.on('response', ()=> {
    console.log('more data recieved');
})  

// (2) emit the event
customEmitter.emit('response', 'nars', 28);