const cal = require("./calculator")
console.log(cal.add(10,5))
console.log(cal.sub(10,5))
console.log(cal.mul(10,5))
console.log(cal.div(10,5))

//other way
const {add,sub,mul,div} = require("./calculator")
console.log(add(10,5))
console.log(sub(10,5))
console.log(mul(10,5))
console.log(div(10,5))