// import { useEffect } from "react";
// import { useState } from "react"

// export const Prime =()=>{
//     const [inputNum, setInputNum] = useState();
//     const [primeNum, setPrimeNum] = useState([]);
//     // useEffect(()=>{
//     //         for(let i=3; i<=inputNum; i+2){
//     //                 for(let j=3; j<=i; j+2){
//     //                     if(i%j===1){
//     //                         console.log(i);
//     //                     } 
//     //                 }
//     //         }
//     // },[inputNum])
//     // const run = () =>{
//     //     for(let i=3; i<=inputNum; i+2){
//     //         for(let j=3; j<=i; j+2){
//     //             if(i%j===1){
//     //                 console.log(i);
//     //                 // setPrimeNum((num)=>setPrimeNum([...num, i]))
//     //             } 
//     //         }
//     // }
//     }
//     return(
//         <div>
//             <input type="number" onChange={(e)=>setInputNum(parseInt(e.currentTarget.value))}/>
//             <button onClick={()=>run}>Start</button>
//             {/* <p>{primeNum}</p> */}
//         </div>
//     )
// }