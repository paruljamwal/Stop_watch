
import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
  let [time,setTimer] = useState(0);
  let [min,setMin] = useState(0);
  let [sec,setSec] = useState(0);
  let [hour,setHour] = useState(0);
  let timee = useRef();
  function startTime(){
   timee.current = setInterval(() => {
      setTimer(pre=>pre+1)
    }, 1000);
  }

  useEffect(()=>{
    if(time<60){
      setHour(0);
      
    }
 return ()=> clearInterval(timee.current);
},[]);


 return (
    <div className="App">
    <h1>Stop Watch {time} </h1>
    <h2>Start editing to see some magic happen!</h2>
   <button onClick={startTime}>Start</button>
   <button onClick={()=>clearInterval(timee.current)}>pause</button>
   <button onClick={()=>{ clearInterval(timee.current)
     setTimer(0) }}>reset</button>

  </div>
  );
}

export default App;
