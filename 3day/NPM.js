const request = require('request');
const readline = require("readline")
const fs = require("fs");
const url  = require('url');
const http = require("http");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
// rl.question('Цаг агаарын мэдээ авах хаяг: ', (answer)=>{
    console.log('Цаг агаарын мэдээ авах хаяг:', "ulaanbaatar");

    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/ulaanbaatar.json?access_token=pk.eyJ1IjoiZG9yam9vMzAxMyIsImEiOiJja3VrbXQzNm8zYWE0Mm9vODh5Ym84azdmIn0.jxeIzJm4YCIT2VBctVSTRg `, function (error, response, body){
        const data = JSON.parse(body);
        // console.log('data:', data.features[0].geometry.coordinates);
        console.log('0.', 'Газрын хаяг', data.features[0].place_name , 'lat: ', data.features[0].geometry.coordinates[0], 'long: ', data.features[0].geometry.coordinates[1]);
        console.log('1.', 'Газрын хаяг', data.features[1].place_name , 'lat: ', data.features[1].center[0], 'long: ', data.features[1].center[1]);
        console.log('Тоо оруулна уу:', "0");
        const options={
            method: "GET",
            url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
            qs:{lon:data.features[0].geometry.coordinates[0], lat:data.features[0].geometry.coordinates[1]},
            headers: {
                "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
                "x-rapidapi-key":"063f6ebe6amsh16b13e9dec1de5ap16463bjsnd9f5cb9f6ccc",
                useQueryString: true,
              },
        }
        request(options, function (error, response, body){
        const data1 = JSON.parse(body);

        console.log('Цаг агаар цас орох магадлал: ', data1.data[0].snow,"\n",'Температур: ',data1.data[0].temp);
            
        })


    })
//     rl.close();
// });

