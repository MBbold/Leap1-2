// import logo from './logo.svg';
// import './App.css';
// import './Style.css'
// import { StopWatch } from './StopWatch';
// import { Prime } from './Prime';

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Button</h1>
//         <p>
//           Default
//         </p>
//         <div className='btnClass'>
//           <button className='primary'>Primary</button>
//           <button className='secondary'>Secondary</button>
//           <button className='disable'>Disable</button>
//         </div>
//       <h1>Status</h1>
//       <div className='btnClass'>
//           <button className='success'>Success</button>
//           <button className='delete'>Delete</button>
//         </div>

//         <div className='shape'>
//           <div className='box-B200'>

//           </div>
//           <div className='box-D400'>

//           </div>
//           <div className='box-white'>

//           </div>
//           <div className='box-B100'>

//           </div>
//           <div className='box-R100'>

//           </div>
//           <div className='box-white'>

//           </div>
//           <div className='box-white'>

//           </div>
//           <div className='box-white'>

//           </div>
//         </div> */}


//     {/* <StopWatch /> */}
//     <Prime />



//     </div>
//   );
// }

// export default App;








import React, { useState, useEffect, useMemo } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const logic = (state) => {
    switch (state) {
      case "start":
        setIsRunning(true);
        break;
      case "stop":
        setIsRunning(false);
        break;
      default:
        setIsRunning(false);
        setTime(0);
    }
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });
  const [selectedNum, setSelectedNum] = useState(100);
  const allPrimes = [];

  const memoiValue = useMemo(()=>{
    for (let counter = 2; counter < selectedNum; counter++){
      if (isPrime(counter)) {
        allPrimes.push(counter);
      }
    }
    return allPrimes;
  },[selectedNum])
  

  return (
    <div>
      <div>
        <h1>{time}s</h1>
        <button onClick={() => logic("start")}>Start</button>
        <button onClick={() => logic("stop")}>Pause</button>
        <button onClick={() => logic("reset")}>Reset</button>
      </div>
      <br />
      <form>
        <label>Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            setSelectedNum(event.target.value);
          }}
        />
      </form>
      <span style={{ fontWeight: "600" }}>
        There are {memoiValue.length} prime(s) between 1 and {selectedNum}:{" "}
      </span>
      <span>{memoiValue.join(", ")}</span>
    </div>
  );
};


const isPrime = (n) => {
  console.log("starting");
  const max = Math.ceil(Math.sqrt(n));
  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
};

export default App;