import React, {useState} from 'react';

function UpdatingValueComponent (){
    const handleChange = (event) => {
        setText(event.target.value);
    }
return(
    <div>
        <label>
            Введите текст:
            <input tupe = "text" value = {text}
            onChange = {handleChange} />
        </label>
        <p>{text}</p>
    </div>
);
};
export default UpdatingValueComponent;