import React from 'react';

const ObjectComponent = ({ objectProp }) => {
  return <p>{JSON.stringify(objectProp)}</p>;
};

export default ObjectComponent;
