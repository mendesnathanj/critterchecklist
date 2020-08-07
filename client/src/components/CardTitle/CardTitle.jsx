import React from 'react';
import { cardTitle, smaller } from './CardTitle.module.sass';
import { cn } from '../../utils/functions';

const CardTitle = ({ text }) => {
  const classes = text.length > 20 ? cn(cardTitle, smaller) : cn(cardTitle);

  return <h3 className={classes}>{ text }</h3>;
}

export default CardTitle;
