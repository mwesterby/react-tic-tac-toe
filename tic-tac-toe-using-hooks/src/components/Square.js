import React from 'react';

const style = { // Not css
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
};

// const props = {
//   onClick: () => "function",
//   value: "X"
// };

// const { value } = props;

const Square = ({value, onClick}) => ( // Destructing out props
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;