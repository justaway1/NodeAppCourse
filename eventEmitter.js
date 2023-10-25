//EventEmitter is a class
const EventEmitter = require('events')

//An instance of the class EventEmitter
const customEvent = new EventEmitter()

//Adding an event listener
//We can have as many listeners(subscribers) as we want
//we can have parameters in the callback function
customEvent.on('response', (name, id) => {
  console.log(`Hello, ${name}, your id is ${id}`)
})
customEvent.on('newCustomer', (name, id) => {
  console.log(`We have a new customer: ${name} your id: ${id}`)
})

//Emitting an event
//The Order matters we cannot put it above the first listener
customEvent.emit('response', 'stan', 1991)
customEvent.emit('newCustomer', 'Michael', 2022)
