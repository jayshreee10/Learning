import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react';

function App() {
 
  const [time, setTime] = useState(new Date().toLocaleTimeString);
  // setInterval(() => {
  //   setTime(new Date().toLocaleTimeString);
  // }, 1000);
  return (
    <>
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
          fontSize:"40px"
        }}
      >
       {time}
      </div>
    </>
  );
}


export default App
