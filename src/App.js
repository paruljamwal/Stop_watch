
import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
  let [time,setTimer] = useState(0);
  let [timer,setTime] = useState({ms:0,h:0,m:0,s:0});
  let timee = useRef();
  let [interv,setInterv] = useState();

  let updatedMs=timer.ms ,updatedh = timer.h, updatedM= timer.m, updatedS=timer.s;

 
  function startTime(){
    timee.current = setInterval(() => {
      setTimer(pre=>pre+1)
    }, 1000);
  }
  const start=()=>{
    console.log("start");
   run();
   setInterv(setInterval(run,10));
  }

  let run=()=>{
  
    if(updatedM===60){
      updatedh++;
      updatedM=0;
    }
    if(updatedS===60){
     updatedM++;
     updatedS=0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs,h:updatedh,m:updatedM,s:updatedS});
  }

  const stop=()=>{
    console.log("stop");
    clearInterval(interv);

  }

  
  const reset=()=>{
    console.log("reset");
    clearInterval(interv);
    setTime({ms:0,h:0,m:0,s:0});
  }

  const resume = ()=>{
    start();
    console.log("resume");
  }

useEffect(()=>{

})

 return (
    <div className="App">
    <h1>Stop Watch {time} </h1>
    <h2>Start editing to see some magic happen!</h2>
    <button onClick={startTime}>Start</button>
    <button onClick={()=>clearInterval(timee.current)}>pause</button>
    <button onClick={()=>{ clearInterval(timee.current)
     setTimer(0) }}>reset</button> 
     <hr/> 
     <span>{timer.h>=10? timer.h+" " + "hour" : '0'+ timer.h+" " +"hour"}</span>:
      <span>{timer.m>=10? timer.m+ " " +"min"  : '0'+ timer.m+" " + "min" }</span>:
      <span>{timer.s>=10? timer.s + " " +"secs"  : '0'+ timer.s + " " +"secs"  }</span> <br/> <br/> <br/>
    <button onClick={start} >Start</button>
    <button onClick={stop} >Stops</button>
    <button onClick={reset} >Reset</button>
    <button onClick={resume} >Resume</button>
  </div>
  );
}

export default App;
