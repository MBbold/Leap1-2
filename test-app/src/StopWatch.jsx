import { useReducer } from "react"
import { useEffect } from "react"
import { useState } from "react"










// export const StopWatch = ()=>{
//     const initialState ={
//         isRunning: false,
//         time:0
//     }
//     const reducer =(state, action)=>{
//         switch(action.type){
//             case "start":
//                 return {...state, isRunning:true}
//             case "pause":
//                 return {...state, isRunning:true}
//             case "stop":
//                 return {isRunning:true, time:0}
//             case "tick":
//                 return {...state, time: state.time+1}
                
//         }
//     }
//     const [state, dispatch] = useReducer(reducer, initialState)
//     // const [count, setCount] = useState(0);
//     // const [running, setRunning] = useState(false);
//     // const sec =()=>{
//     //         // const interval = 
            
//     // }
//     useEffect(() => {
//         if (!state.isRunning) return;
    
//         const interval = setInterval(() => dispatch({ type: "tick" }), 1000);
//         return () => {
//           clearInterval(interval);
//         };
//       }, [state.isRunning]);
//     // const reset = ()=>{
//     //     setCount(0)
//     // }

//     return(
//         <div>
//             <p>STOP WATCH</p>
//             <div style={{border:"1px solid black", width:'400px', height:'100px', margin:'auto', display:'flex', justifyContent:'center', alignItems:'center'}}>
//                 <p>00:</p>
//                 <p>0{state.time}:</p>
//                 <p>00</p>

//             </div>
//             <button onClick={()=>{dispatch({type:"start"}); console.log(state.isRunning)}} >Start</button>
//             <button onClick={()=>dispatch({type:"pause"})}>PAUSE</button>
//             <button onClick={()=>dispatch({type:"stop"})}>RESET</button>
//         </div>
//     )
// }


// export const StopWatch = () => {
//     const [time, setTime] = useState(0);
//     const [running, setRunning] = useState(false);
//     useEffect(() => {
//       let interval;
//       if (running) {
//         interval = setInterval(() => {
//           setTime((prevTime) => prevTime + 10);
//         }, 10);
//       } else if (!running) {
//         clearInterval(interval);
//       }
//       return () => clearInterval(interval);
//     }, [running]);
//     return (
//       <div className="stopwatch">
//         <div className="numbers">
//           <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
//           <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
//           <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
//         </div>
//         <div className="buttons">
//           <button onClick={() => setRunning(true)}>Start</button>
//           <button onClick={() => setRunning(false)}>Stop</button>
//           <button onClick={() => setTime(0)}>Reset</button>       
//         </div>
//       </div>
//     );
//   };