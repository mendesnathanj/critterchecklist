import React from 'react';
import Image from '../Image/Image';
import BellBag from '../../images/bellbag.png';
import { icon } from './BellBagIcon.module.sass';

const BellBagIcon = () =>
  <Image variant={icon} src={BellBag} alt='Bell Bag' />

export default BellBagIcon;
