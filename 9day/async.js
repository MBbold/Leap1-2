const request = require('request');
const axios = require('axios');

const readline = require("readline")
const fs = require("fs");
// const url  = require('url');
const http = require("http");


// request(`https://www.poemist.com/api/v1/randompoems`, function (error, response, body){
//         const data = JSON.parse(body);
//         let max=0

//         data.forEach((el)=>{
//             request(`${el.url}`, function (error, response, body){
//                 const totalRead = body.search("Total read")-4;
//                 const name = body.slice(totalRead , totalRead+4)
//                 let number = parseInt(name)
//                 console.log(totalRead);
                
//                 // if(max<number){
//                 //     max =number;
//                 // }
//                 // console.log("Max",max);

//             })

//         })

//     })
const POEM_URL = "https://www.poemist.com/api/v1/randompoems";

//Promise.all
// map
const getData = async () => {
  try {
    const poems = await axios.get(POEM_URL);
    const poem = await axios.get(poems.data[0].url);
    const row = poem.data.split("\n");
    let totalRead = [];
    row.forEach((item) => {
      if (item.includes("Total read")) {
        totalRead.push(item);
      }
    });
    // console.log(totalRead);
  } catch (error) {
    console.log(error);
  }
};

getData();



let a = '<i class="fas fa-eye"></i> 124 Total read'
console.log(a.slice(3,4));
