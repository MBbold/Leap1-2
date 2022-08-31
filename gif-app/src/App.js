import './App.css';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {

  const [gifData, getData] = useState([])
  const [inputValue, setInputValue] = useState("");
  const [input, setInput] = useState();
  const [isLoading, setIsLoading] = useState();

  


  // const instance = axios.create({
  //   baseURL: 'https://api.giphy.com/v1/gifs/search?api_key=NptZhhwltiR6lI9tdXlwA40mvrAPW064&q=${batman}'
  // });
  // console.log('instance', instance.baseURL);



  useEffect( () => {
    const apiFunc = async ()=>{
      const result = await axios(`https://api.giphy.com/v1/gifs/search?api_key=sfJoNIbYEOS4pmyNpQe5lT4FkLd6xmAg&q=${input}&limit=30`)
      setIsLoading(false)
      getData(result.data.data)
    }
    apiFunc();
  },[input]
  )
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', alignItems:'center', flexDirection:'column'}}>
      <div style={{display:'flex'}}>
        <input onChange={(event)=>setInputValue(event.target.value)}></input>
        {console.log(inputValue)}
        <p>Search</p>
        <input onClick={()=>{setInput(inputValue); setIsLoading(true)}} type="submit"></input>
        {console.log(input)}
      </div>
      <div style={{width:'50%'}}>
        {isLoading ? <p>Loading...</p> :gifData.map((el, i)=> <img style={{width:'100px', height:'100px', objectFit:'cover'}} src={el.images.original.url} key={i} />)}

      </div>
    </div>
  );
}

export default App;
