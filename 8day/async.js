//     var willIGetNewPhone = new Promise(function (resolve, reject) {
//     let time = Math.round(Math.random() * 7) * 1000;
//     setTimeout(() => {
//       let isMomHappy = Math.round(Math.random());
//       if (isMomHappy) {
//         var phone = {
//           brand: "iPhone",
//           color: "black",
//         };
//         resolve(phone); // fulfilled
//       } else {
//         var reason = new Error("mom is not happy");
//         reject(reason); // reject
//       }
//     }, 1000);
//   });
//   // call our promise

// const askMomCase = (e)=>{
    
// }
//   const caseBuy = (a)=> new Promise(function(resolve, reject){
//        setTimeout(()=>{
//             if(a===5){
//                 let cases = "blue";
//                 resolve(cases); // fulfilled
//             } 
//             let reason = new Error("not");
//                 reject(reason); // reject
//        },3000)
//   })

  
//   const askMom1 = async () => {
//     try {
//       const response = await willIGetNewPhone;
//       console.log("Utas:",response);
//       console.log("asking case...");
                    
//                     try {
//                         const response1 = await caseBuy();
//                         console.log("Case:",response1);
                        
//                     } catch (error) {
//                         console.log("Case error:",error.message);
//                     }
//       return response;
//     } catch (error) {
//       console.log("Utas error:",error.message);
//     }
//   };
  
//   console.log("asking: ", askMom1());

const notNum = (a)=> new Promise(function(resolve, reject){
    setTimeout(()=>{
         if(!isNaN(a)){
             let value = "Number";
             if(a%2==1){
                value = "odd"
                resolve(value);
             } else{
                setTimeout(()=>{
                    let reason = new Error("even");
                    reject(reason);
                },2000)
             }
         } else {
            let reason = new Error("in a string");
             reject(reason); // reject
         }
         
    },1000)
})
const notNumFun = async(a)=>{
    try {
        const response = await notNum(a);
        console.log("Number:", response);
        return response
    } catch (error) {
        console.log("Number:", error.message);
        return error.message
    }
}
  console.log("asking: ", notNumFun("sss"));
