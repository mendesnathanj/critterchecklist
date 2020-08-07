import React from 'react';
import { cn } from '../../utils/functions';
import { dFlex, spaceBetween, alignCenter, fullWidth } from '../../styles/Display.module.sass';
import { cardSummarySection } from './CardSummarySection.module.sass';

const CardSummarySection = ({ children, override = '' }) =>
  <div className={cn(dFlex, spaceBetween, alignCenter, fullWidth, override, cardSummarySection)}>
    { children }
  </div>

export default CardSummarySection;
