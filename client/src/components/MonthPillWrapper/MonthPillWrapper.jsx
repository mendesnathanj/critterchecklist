import React from 'react';
import { wrapperXSmall } from '../../styles/Utility.module.sass';
import { monthPillWrapper } from './MonthPillWrapper.module.sass';
import { cn } from '../../utils/functions';

const MonthPillWrapper = ({ children }) =>
  <div className={cn(monthPillWrapper, wrapperXSmall)}>{ children }</div>

export default MonthPillWrapper;
