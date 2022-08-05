// const readline = require("readline")
// const fs = require("fs");
// const http = require("http");

const PI = 3.14;
exports.PI = PI;
// console.log(PI)


const max = (a)=>{
    let max = 0;
    a.forEach((e)=>{
        if(max<e){
            max = e;
        }
    })
    return max;
}
exports.max = max;

const sqrt =  (a)=>{
    return (Math.sqrt(a));
}
exports.sqrt = sqrt;

const round =  (a)=>{
    return (Math.round(a));
}
exports.round = round;
const floor =  (a)=>{
    return (Math.floor(a));
}
exports.floor = floor;


const abs =  (a)=>{
    return (Math.abs(a));
}
exports.abs = abs;