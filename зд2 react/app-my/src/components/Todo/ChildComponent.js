import React, {useState} from 'react';


const ChildComponent = ({name, counter}) => {
    return (
      <p>
        Привет, {name}! Текущее значение счетчика: {counter}
      </p>
    );
  };

export default ChildComponent;





