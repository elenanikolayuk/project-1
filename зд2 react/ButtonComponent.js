import React, {useState} from 'react';

function ButtonComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  ;

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={handleClick}>Кликни</button>
    </div>
  );
};
};
export default ButtonComponent;

