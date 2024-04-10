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
   const  [error,setError]= useState(false)

    let inputLocation = ""
    async function callApi (){
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=7d3a506953bf739eb497cd7257dfe861`)
    if(response.status == 200 ){
    const apiData = await response.json()
    
    console.log (apiData )
    // let longitude = apiData[0].lon;
    // let latitude = apiData[0].lat;
    // // console.log (longitude)
    // // console.log (latitude)
    // const getLocation = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7d3a506953bf739eb497cd7257dfe861`)
    // const locationData = await getLocation.json()
    // console.log (locationData)
    let newData = {
      temperature :apiData.main.temp ,
      location : apiData.name,
      humidity : apiData.main.humidity  ,
      wind :apiData.wind.speed,
      pressure : apiData.main.pressure
    }
    console.log(newData.temperature)
    console.log(newData.location)
    console.log(newData.humidity)
    console.log(newData.wind)
    console.log(newData.pressure)
    setData(newData)
  }
  else {
    setError(true) 
  }

    }
  return (
    <>
      <div
        className="search"
        style={{ height: "10vh", width: "100vw", backgroundColor: "black", }}
      >
        <input type="text" placeholder="location" style={{height:"4vh",width:"40vw",marginTop:"10px"}}
        onChange={(e)=>{inputLocation = e.target.value}}/>
        <button type="button" onClick={()=>{callApi()}}>search</button>
      </div>
      {error ? (<div > error </div>): (
        <div className="properties"  style={{ height: "90vh", width: "100vw", backgroundColor: "black" }}>
        <div
          className="temperature"
          style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
        >
         {data.temperature}
        </div>
        <div
          className="location"
          style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
        >
        {data.location}
        </div>
        <div
          className="humidity"
          style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
        >
         {data.humidity}
        </div>
        <div
          className="pressure"
          style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
        >
          {data.pressure}
        </div>
        <div
          className="wind"
          style={{ height: "10vh", width: "100vw", backgroundColor: "black" }}
        >
      {data.wind}
        </div>
        </div>
    )}
      
      
    </>
  );
}

export default App;
