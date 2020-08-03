import React from 'react';
import { pillWrapper, pill } from './Pill.module.sass';
import { wrapperXSmall } from '../../styles/Utility.module.sass';
import { cn } from '../../utils/functions';


const Pill = ({ text, variant }) =>
  <div className={cn(pillWrapper, wrapperXSmall)}>
    <div className={cn(pill, variant)}>{text}</div>
  </div>


export default Pill;
