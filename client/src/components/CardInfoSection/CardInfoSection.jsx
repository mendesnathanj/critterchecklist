import React from 'react';
import { dFlex, spaceBetween, alignCenter, fullWidth } from '../../styles/Display.module.sass';
import { cardInfoSection } from './CardInfoSection.module.sass';
import { cn } from '../../utils/functions';

const CardInfoSection = ({ children }) =>
  <div className={cn(dFlex, spaceBetween, alignCenter, fullWidth, cardInfoSection)}>
    { children }
  </div>

export default CardInfoSection;
