import React from 'react';
import { pill } from './Pill.module.sass';
import { cn } from '../../utils/functions';


const Pill = ({ text, variant, handler }) =>
  <div className={cn(pill, variant)} onClick={handler}>{text}</div>


export default Pill;
