// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
function add(x, y){
    return x+y;
}
let sum = add;
console.log(sum(5,3))

const add1 =function(x, y){
    return x+y;
}
console.log(add1(5,3))

// Arrow function
let add2 = (x,y ) => x+y;
console.log(add2(5,6))

//Ner hevleh
let name = (x)=>  {
    return `Hello,${x}`;
}
console.log(name("Munkhbold"))


//Boolen
let allow = (a)=> {
    if(a===true){
        return "bolson"
    }else return "boloogui"
}
console.log(allow(true));
console.log(allow(false));




function teacher(){
    return "Teacher";
}
  
function student(){
    return "Student";
}
  
function greet(user){
    console.log("Welcome", user());    
}
  
var message = greet(teacher);
  
var message = greet(student);


