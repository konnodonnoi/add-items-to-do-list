//added counter phase ii
 import React, { useState }from "react";
import "./App.css";

 const App = ()  => {
  //a technique to set a counter

  const [count, setCount] = useState(0)


  //add section
  const add =  () =>  {
    setCount(prevCount => prevCount + 1)

  }


  //subtract section
  const minus = () => {
    setCount(prevCount => prevCount - 1)
  }

  //display section
    return (
      <div className="counter">
          <button className="counter--minus" onClick={minus}>–</button>
          <div className="counter--count" >
              <h3>{count}</h3>
          </div>
          <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
}

export default App;