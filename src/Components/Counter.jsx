import React, { useState } from "react";


function Counter() {
  const [count, setCount] = useState(72);
    const increaseVal = ()=> setCount(count + 1)
    const decreaseVal = ()=>{
      if(count > 0) {
        setCount(count - 1)
      }
    }
    


  return (
    <>
      <div className="App mt-5"> 
      <h1>Inc and dec value using state</h1>
      <p>Current Temperature: <strong>{count}°C</strong> </p>
      <br />
        <div>
            <button className="btn btn-dark mx-2" onClick={increaseVal}>Inc Temp</button>
           <strong> {count}</strong>
            <button className="btn btn-dark mx-2" onClick={decreaseVal}>Dec Temp</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
