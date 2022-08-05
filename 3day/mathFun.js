const readline = require("readline")
const exportsMath = require('./math.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
rl.question('Ta toogoo oruulna uu: ', (answer)=>{
    let inputNumber = answer.split(" ");
    // console.log(typeof inputNumber, inputNumber)
    let min = 0;
    

    console.log("sqrt: ", exportsMath.max(inputNumber))
    console.log("sqrt: ", exportsMath.sqrt(answer))
    console.log("round: ", exportsMath.round(answer))
    console.log("floor: ", exportsMath.floor(answer))
    console.log("abs: ", exportsMath.abs(answer))



    rl.close();
});