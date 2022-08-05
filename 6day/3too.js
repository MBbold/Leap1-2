const chalk = require("chalk");

function urjver(a, b, c){
    return a*b*c;
}
console.log("niit urjver= ",chalk.red(urjver(3,4,5)))



console.log("=====================Curring function==================")

let discounttotal = (price) => (discount) => price-(price * discount);
console.log(discounttotal(1500)(0.2))


console.log("=====================chocolates==================")


const chocolates = [
    {"dark":true, "flavour":"strawberry"},
    {"dark":false, "flavour":"strawberry"},
    {"dark":false, "flavour":"almond"},
    {"dark":true, "flavour":"almond"},
    {"dark":false, "flavour":"lemon"}
]
    // chocolates.filter(checkProperty("dark")(true))
const checkProperty = (a) => (b) => (c)=>c[a] == b;

// console.log(chocolates.filter((a)=>a.dark == true))
// console.log(checkProperty("dark")(true))

console.log(chocolates.filter(checkProperty("flavour")("almond")))

