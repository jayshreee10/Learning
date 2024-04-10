// import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {

  let defaultData = {
    temperature : "",
    location : "",
    humidity :  "" ,
    wind : "" ,
    pressure : ""

  }
   const  [data,setData]= useState(defaultData)
    async function callApi (){
    const response = await fetch ("http://api.openweathermap.org/geo/1.0/direct?q=berhampur&appid=7d3a506953bf739eb497cd7257dfe861")
    const apiData = await response.json()
    console.log (apiData )
    let longitude = apiData[0].lon;
    let latitude = apiData[0].lat;
    console.log (longitude)
    console.log (latitude)
    const getLocation = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7d3a506953bf739eb497cd7257dfe861`)
    const locationData = await getLocation.json()
    console.log (locationData)
    let newData = {
      temperature :locationData.main.temp ,
      location : locationData.name,
      humidity : locationData.main.humidity  ,
      wind :locationData.wind.speed,
      pressure : locationData.main.pressure
    }
    console.log(newData.temperature)
    console.log(newData.location)
    console.log(newData.humidity)
    console.log(newData.wind)
    console.log(newData.pressure)
    setData(locationData)
    
  }

  return (
    <>
      <div
        className="search"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black", }}
      >
        <input type="text" placeholder="location" style={{height:"4vh",width:"40vw",marginTop:"10px"}}/>
        <button type="button" onClick={()=>{callApi()}}>search</button>
      </div>

      <div
        className="temperature"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
       {newData.temperature}
      </div>
      <div
        className="location"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
      {/* {newData.location} */}
      </div>
      <div
        className="humidity"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
       {/* {newData.humidity} */}
      </div>
      <div
        className="pressure"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
        {/* {newData.pressure} */}
      </div>
      <div
        className="wind"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
      >
    {/* {newData.wind} */}
      </div>
    </>
  );
}

export default App;
