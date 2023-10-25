//EventEmitter is a class
const EventEmitter = require('events')

//An instance of the class EventEmitter
const customEvent = new EventEmitter()

//Adding an event listener
customEvent.on('response', () => {
  console.log('Hello')
})

//Emitting an event
customEvent.emit('response')
