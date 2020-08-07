import React from 'react';
import BellBagIcon from '../BellBagIcon/BellBagIcon';
import { cardValue } from './CardValue.module.sass';
import { dFlex, alignCenter } from '../../styles/Display.module.sass';
import { cn } from '../../utils/functions';

const CardValue = ({ value }) =>
  <span className={cn(dFlex, alignCenter, cardValue)}>
    <BellBagIcon />
    <span>{value}</span>
  </span>

export default CardValue;
