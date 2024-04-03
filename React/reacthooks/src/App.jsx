import { useState } from "react";
import "./App.css";

function App() {

  let [count, setCount] = useState(0);
 function addCount(){
  setCount (count+1)
 }
 function subCount(){
   if(count<=0){
     subButton.disable = true
    }
    else 
    setCount (count-1)
  
}
function resetCount(){
setCount (count = 0)
}
  return (
    <>

      <div className="counter" >
        <div className="text"  style={{  "height": "20vh"} }>{count}</div>
        <div
          className="buttons"
          style={{
            display: "flex",
            "justify-content": "space-between",
            width: "40vw",
          }}
        > 
          <input
            type="button"
            value="ADD"
            style={{ width: "100px", height: "30px" } } 
            onClick = {()=>{addCount()}}
          />
          <input
          className="subButton"
            type="button"
            value="SUBTRACT"
            style={{ width: "100px", height: "30px" }}
            onClick = {()=>{subCount()}}

          />
          <input
          className="resetButton"
            type="button"
            value="Reset"
            style={{ width: "100px", height: "30px" }}
            onClick = {()=>{resetCount()}}

          />
        </div>
      </div>
    </>
  );
}

export default App;
