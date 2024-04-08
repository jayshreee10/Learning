import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import { useRef } from 'react';

function App() {
  function getTime() {
    return new Date().toLocaleTimeString();
  }
  const [time, setTime] = useState(getTime());
  setInterval(() => {
    setTime(getTime());
  }, 1000);
  return (
    <>
      <div
        className="clockFrame"
        style={{
          height: "65vh",
          width: "35vw",
          backgroundColor: "#00060A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid gray",
          borderRadius: "50%",
          boxShadow:""
        }}
      >
        <div
          className="Clock"
          style={{
            height: "55vh",
            width: "30vw",
            backgroundColor: "black",
            color: "white",
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "67px",
            border: "3px solid #A1BE00",
            borderRadius: "50%",
          }}
        >
          {time}
        </div>
      </div>
    </>
  );
}

export default App;
