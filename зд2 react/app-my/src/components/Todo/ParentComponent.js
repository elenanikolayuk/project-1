import React, {useState} from 'react';
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);
  
    const increment = () => {
        setCounter(counter + 1);
    };
  
    const decrement = () => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    };
  
    const resetNull = () => {
       setCounter(0);
    };
  
    const randomCounter = () => {
        const max = 10;
        const randomNum = Math.floor(Math.random() * max);
        setCounter(randomNum)
    };
  
    return (
      <div>
        <p>Счетчик: {counter}</p>
        <button onClick={increment}>Увеличить</button>
        <button onClick={resetNull}>Сбросить</button>
        <button onClick={randomCounter}>Случайное значение</button>
        <button onClick={decrement}>Уменьшить</button>
        <ChildComponent name={"Elena"} counter={counter} />
        <SiblingComponent />
      </div>
    );
};

export default ParentComponent;