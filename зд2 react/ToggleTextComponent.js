import React, {useState}  from 'react';

function ToggleTextComponent() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  ;

  return (
    <div>
      <button onClick={handleClick}>
        isShown ? 'Скрыть текст' : 'Показать текст'
      </button>
      isShown && <p>Это текст, который показан или скрыт</p>
    </div>
  );
    };
};
export default ToggleTextComponent;