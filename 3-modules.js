// CommonJs - every file is  modules(by default);
// Modules - encapsulate code (only share minimum);
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative_flavor')
require('./7-mind_graneds')

console.log(data);
console.log(names);

sayHi('Venkatesh')
sayHi(names.john)
sayHi(names.peter)