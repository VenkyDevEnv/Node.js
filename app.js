// EVENTS
const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('click', () => {
    console.log('Data received')
})

customEmitter.on('click', () => {
    console.log('some other response')
})

customEmitter.emit('click');