// EVENTS
const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('click', (name,id) => {
    console.log(`Data received user ${name} and id:${id}`)
})

customEmitter.on('click', () => {
    console.log('some other response')
})

customEmitter.emit('click', 'john', 58);