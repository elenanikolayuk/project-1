import React from 'react';
import NumberComponent from './components/Todo/NumberComponent';
import StringComponent from './components/Todo/StringComponent';
import BooleanComponent from './components/Todo/BooleanComponent';
import ObjectComponent from './components/Todo/ObjectComponent';
import FunctionComponent from './components/Todo/FunctionComponent';

const App = () => {
  const number = 42;
  const string = 'Hello, world!';
  const boolean = true;
  const object = { name: 'John', age: 30 };
  const array = [1, 2, 3];
  const handleClick = () => alert('Button clicked!');

  return (
    <div>
      <NumberComponent numberProp={number} />
      <StringComponent stringProp={string} />
      <BooleanComponent booleanProp={boolean} />
      <ObjectComponent objectProp={object} />
      <FunctionComponent functionProp={handleClick} />
    </div>
  );
};

export default App;