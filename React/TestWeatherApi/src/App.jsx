import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [data, setdata] = useState(
  //   temperature = 50,
  //   location = "odisha",
  //   humidity =  10 ,
  //   wind = 20 ,
  //   pressure = 60

  // );
  // useEffect ( ()=>{
     const apiUrlForCity = "http://api.openweathermap.org/geo/1.0/direct?q=berhampur&appid=7d3a506953bf739eb497cd7257dfe861"
    //  data = apiUrlForCity.name 
     console.log (apiUrlForCity. name )
      // setdata ()=>{data, location; apiUrlForCity.name }
  // },[])
  

  return (
    <>
      <div
        className="search"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black", }}
      >
        <input type="text" placeholder="location" style={{height:"4vh",width:"40vw",marginTop:"10px"}}/>
        <button type="button">search</button>
      </div>

      <div
        className="temperature"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
        rfg
      </div>
      <div
        className="location"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
       ff 
      </div>
      <div
        className="humidity"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
       gsx
      </div>
      <div
        className="pressure"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
        sxbg
      </div>
      <div
        className="wind"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
    sgb
      </div>
    </>
  );
}

export default App;
