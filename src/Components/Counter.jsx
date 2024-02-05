import { useState, useEffect } from 'react';
import "./CounterStyle.css";



const Counter= () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    updateDigitColor();
  };

  const reset = () => {
    setCount(0);
    updateDigitColor();
  };

  const decrement = () => {
    setCount(count - 1);
    updateDigitColor();
  };


  const updateDigitColor = () => {
    const digitElement = document.querySelector('#digit');
    if (count > 0 ) {
      digitElement.style.color = 'green';
    } else if (count < 0 ) {
      digitElement.style.color = 'red';
    } else {
      digitElement.style.color = 'black';
    }
  };

  useEffect(() => {
    document.title = `Counter ( ${count} )`;
  },);
  
  return (
    <>
     <div className="container">
      <h1>Counter</h1>
        <span id="digit">{count}</span>
        <div className="buttons">
          <button className="decre" onClick={decrement}>Decrement</button>
          <button className="reset" onClick={reset}>Reset</button>
          <button className="incre" onClick={increment}>Increment</button>
        </div>
      </div>
    </>
  )
}

export default Counter;