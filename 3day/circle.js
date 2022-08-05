const readline = require("readline")
const exportsMath = require('./math.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
rl.question('Ta toogoo oruulna uu: ', (answer)=>{
    let r = answer;
    let c = 2*exportsMath.PI*r;
    console.log("Toirgiin urt bol= ", c)
    rl.close();
});