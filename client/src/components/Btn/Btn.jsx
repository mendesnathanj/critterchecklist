import React from 'react';

const Btn = ({ value, variant, clickHandler }) =>
  <button className={variant} onClick={clickHandler}>{ value }</button>

export default Btn;
