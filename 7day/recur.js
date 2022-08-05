const { reverse } = require("dns");
const readline = require("readline")
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

// console.log("====================N тооны нийлбэр FOR давталт ашиглав================")

// let sum = 0;
//   rl.question('Та N тоо оруулна уу: ', (answer)=>{
//     for(let i = 1; i<=parseInt(answer); i++){
//         sum+=i;
//     }
//     console.log(`${answer} хүртлэх тооны нийлбэр= `, sum)
//     rl.close();
// });

// console.log("====================N тооны нийлбэр RECURSIVE ашиглав================")
// //Дуусан нөхцөл заавал бичих - Өөрийгөө дуудах функц
// //base Case - 3дах утгаас авч эхлэх
// //Recursion - 
// let sum = 0;
//   rl.question('Та N тоо оруулна уу: ', (answer)=>{
//     const recursive =(a)=>{
//         if(a>=1){
//             sum+=a;
//             return recursive(a-1)
//         }else{
//             return sum;
//         }
//     }
//     console.log(`${answer} хүртлэх тооны нийлбэр= `, recursive(parseInt(answer)))
//     rl.close();
// });
// console.log("====================N тооны нийлбэр RECURSIVE ашиглав================")
// //Дуусан нөхцөл заавал бичих - Өөрийгөө дуудах функц
// //base Case - 3дах утгаас авч эхлэх
// //Recursion - 
// let sum = 0;
//   rl.question('Та N тоо оруулна уу: ', (answer)=>{
//     const recursive =(a)=>{
//         if(a<0){
//             return 0;
//         }else{
//             return a + recursive(a-1);
//         }
//     }
//     console.log(`${answer} хүртлэх тооны нийлбэр= `, recursive(parseInt(answer)))
//     rl.close();
// });


console.log("====================N! RECURSIVE ашиглав================")


//   rl.question('Та N тоо оруулна уу: ', (answer)=>{
//     const recursive =(a)=>{
//         if(a<2){
//             return 1;
//         }else{
//             return a * recursive(a-1);
//         }
//     }
//     console.log(`${answer} олов = `, recursive(parseInt(answer)))
//     rl.close();
// });

// console.log("====================N fabonacci RECURSIVE ашиглав================")
// // let i = 1
// rl.question('Та N тоо оруулна уу: ', (answer)=>{
//     const recursive =(a)=>{
//         console.log("hey", a)
//         if(a<=1){
//             return a;
//         }else{
//             return recursive(a-1) + recursive(a-2);
//         }
//     }
//     console.log(`${answer} олов = `, recursive(parseInt(answer)))
//     rl.close();
// });

// console.log("====================Temdegt mur RECURSIVE ашиглав================")
// // let i = 1
// rl.question('Та N тоо оруулна уу: ', (answer)=>{
//     const recursive =(a)=>{
//         console.log(a.length)

//         if(a.length<1){
//             return a;
//         }else{
//             return a.charAt(a.length-1) + recursive(a.substring(0, a.length-1));
//         }
//     }
//     console.log(`${answer} олов = `, recursive(answer))
//     rl.close();
// });

// let str = "test";
// str.substring(0, str.length-1)
// console.log(str.charAt(str.length-1))

// console.log("====================Temdegt mur RECURSIVE ашиглав================")
// let arr = [5,["a","b"], 1, 6, [8,9]];

// // rl.question('Та N тоо оруулна уу: ', (answer)=>{
//     const recursive =(a)=>{
//         a.forEach((value)=>{
            
//         })
//     }
//     console.log(` олов = `, recursive(arr))
//     // rl.close();
// // });

// let arr1 = []
// arr1.push(...arr[1])
// console.log(arr1)

// const plusFive = (value)=> value+5;
// // console.log("5-aar nemegduulev", plusFive(-3));
// const plusTen = (e)=> e+10;
// // console.log("10-aar nemegduulev", plusTen(0));
// console.log(plusFive(plusTen(0)))

// const makePlusFunction = (a)=> (b)=> a+b;
// const plusFive = makePlusFunction(5);
// const plusTen = makePlusFunction(10);
// console.log(plusFive(plusTen(0)))



// console.log("====================Waldo mur RECURSIVE ашиглав================")

// const whereisWaldo= ([
//     ["A","A","A"],
//     ["A","A","A"],
//     ["A","B","A"],
// ])
// let count = 0
// const recursive = (input) =>{

//     const flatten = input.reduce((a,b)=> a.concat(b))
//     console.log(flatten);
//     const count = flatten.reduce((a, b)=>{
//         if(a[b]){
//             a[b]++
//         } else {
//             a[b]=1;
//         }
//         return a;
//     },{})
//     console.log("count: ", count);
//     const oddLetter = Object.keys(count).filter((key) => count[key] == 1)[0]
//     console.log("oddLetter: ",oddLetter);
//     const rowNum = input.findIndex((row)=> row.includes(oddLetter));
//     console.log("rowNum: ",rowNum);
//     const colNum = input[rowNum].findIndex((col)=> col == oddLetter)
//     console.log("colNum: ",colNum);
//     return [rowNum+1, colNum+1]



// }
// console.log(recursive(whereisWaldo));


const input = ([
    [0,1,0,0],
    [0,0,1,0],
    [0,1,0,1],
    [1,1,0,0],
])

const mine = (input) => {
    const flatten = input.reduce((a,b)=> a.concat(b))
    
}