const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

rl.question('Ta too oruulna uu? ', (answer)=>{
    let number = answer.split("");
    let sum = 0;
    let sum1 = 1;
    number.forEach((e)=>{
        if(e%2==0){
            sum+=parseInt(e);
        }else
        if(e%2==1){
            sum1*=parseInt(e);
        }
    })
    console.log("Sondgoi toonii urjver: ", sum1)
    console.log("Tegsh toonii niilber: ", sum)
    rl.close();
});