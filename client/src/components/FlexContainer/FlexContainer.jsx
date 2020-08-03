import React from 'react';
import display from '../../styles/Display.module.sass';

const FlexContainer = ({ children }) =>
  <div className={display.dFlex}>{ children }</div>

export default FlexContainer;
