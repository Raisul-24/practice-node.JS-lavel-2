const {a, add} = require('./local-1')
const {a: a2, add: add2} = require('./local-2')  // name alias for same name to rename another name

console.log(a)
console.log(add(a,3))

console.log(a2)
console.log(add2(10,20,30))



// build-in-modules
const path = require("path")
console.log(path.dirname("/Users/raisulislam/Desktop/Level-2/Milstone-2/node-practice/local-1.js"))