import React from 'react';
import { divider } from './Divider.module.sass';
import { cn } from '../../utils/functions';

const Divider = ({additionalClasses = ''}) =>
  <div className={cn(divider, additionalClasses)}></div>

export default Divider;
