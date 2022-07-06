
//   const [result, setResult] = useState("hello");
  

//   function handleClick () {
//     setResult("goodbye")
//   }
  
//   // console.log(result);
//   const billsArray = [
//     "house bills",
//     "netflix bills",
//     "mama bills",
//     "feeding bills",
//     "",
//     "",
//   ];
//   const billsElement = billsArray.map((bill) => <p key={bill}>{bill}</p>);

//   // function addItem() {
//   //   const newItem = `thing ${billsArray.length + 1}`;
//   //   billsArray.push(newItem);
//   //   // console.log(billsArray);
//   // }

//   return (
//     <div className="">
//       <button className="button"  onClick={handleClick}>
//         {result}
//       </button>
//       {billsElement}
//     </div>
//   );
// }

// 
 import React, {useState} from "react";
import "./App.css";

 function App() {

   /**
     * Challenge: Set up state to track our count (initial value is 0)
     */

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