import React from 'react';
import { cardInfo } from './CardInfo.module.sass';

const CardInfo = ({ children }) =>
  <div className={ cardInfo }>
    { children }
  </div>

export default CardInfo;
