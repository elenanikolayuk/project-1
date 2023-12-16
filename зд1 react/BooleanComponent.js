import React from 'react';

const BooleanComponent = ({ booleanProp }) => {
  return <p>{booleanProp ? 'true' : 'false'}</p>;
};

export default BooleanComponent;
