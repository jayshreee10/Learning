import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { useRef } from 'react';

function App() {
  function getTime(){
    return new Date().toLocaleTimeString()
  }
  const [time, setTime] = useState(getTime());
  setInterval(() => {
    setTime(getTime ());
  }, 1000);
  return (
    <>
    <div className='clockFrame'>
      <div
        className="Clock"
        style={{
          height: "30vh",
          width: "30vw",
          backgroundColor: "black",
          color: "white",
          fontSize:"10px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          fontSize:"40px",
          border:"3px solid gray",
          borderRadius:"10px"
        }}
      >
       {time}
      </div>
      </div>
    </>
  );
}


export default App
