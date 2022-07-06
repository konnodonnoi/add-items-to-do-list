
 import React, {useState} from "react";
import "./App.css";

 function App() {


    const [count , setCount] = useState(0)


    function add() {
      setCount(prevCount => prevCount + 1)
    } 

    function minus () {
      setCount(prevCount => prevCount - 1)
    } 

    return (
      <div className="counter">
          <button className="counter--minus" onClick={minus}>–</button>
          <div className="counter--count" >
              <h3>{count}</h3>
          </div>
          <button className="counter--plus" onClick={add} >+</button>
      </div>
  )
}

export default App;