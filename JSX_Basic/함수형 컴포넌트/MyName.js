import React from 'react';

const MyName = ({ name }) => {
  return <div>Hi, my name is {name} :)</div>;
};

MyName.defaultProps = {
  name: 'React'
};

export default MyName;
