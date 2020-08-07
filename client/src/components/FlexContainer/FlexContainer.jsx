import React from 'react';
import { dFlex } from '../../styles/Display.module.sass';

const FlexContainer = ({ children }) =>
  <div className={dFlex}>{ children }</div>

export default FlexContainer;
