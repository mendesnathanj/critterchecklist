import React from 'react';
import { cn } from '../../utils/functions';

const Image = ({ src, alt, variant }) =>
  <img className={cn(variant)} src={src} alt={alt} />

export default Image;
