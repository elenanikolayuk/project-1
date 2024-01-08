import React, {useState} from 'react';

const SiblingComponent = () => {
    const [text, setText] = useState('Text');
  
    const updateText = () => {
      setText('REDEV');
    };
    return (
      <div>
        <p>Текущий текст: {text}</p>
        <button onClick={updateText}>Обновить текст</button>
      </div>
    );
  };
  export default SiblingComponent;
