import React, { useState } from "react";
import "./App.css";

function App() {
  const result = useState('hello');
  console.log(result);
  const billsArray = [
    "house bills",
    "netflix bills",
    "mama bills",
    "feeding bills",
    "",
    "",
  ];
  const billsElement = billsArray.map((bill) => <p key={bill}>{bill}</p>);

  function addItem() {
    const newItem = `thing ${billsArray.length + 1}`;
    billsArray.push(newItem);
    // console.log(billsArray);
  }

  return (
    <div className="">
      <button className="button" onClick={addItem}>
        add items
      </button>
      {billsElement}
    </div>
  );
}

export default App;
