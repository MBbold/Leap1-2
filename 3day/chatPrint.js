const readline = require("readline")
const exportsChat = require('./chat.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('What is your name? ', (answer)=>{
    console.log(exportsChat.chat(answer))

    // rl.resume();
    rl.question('Choice date or time? ', (answer)=>{
        console.log(exportsChat.date(answer),", bye")
    rl.close(); 
    });
});

