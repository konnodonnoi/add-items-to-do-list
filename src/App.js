//added counter phase ii
 import React, { useState }from "react";
import "./App.css";

 const App = ()  => {

  const [count, setCount] = useState(0)

  const add =  () =>  {
    setCount(prevCount => prevCount + 1)

  }

  const minus = () => {
    setCount(prevCount => prevCount - 1)
  }

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