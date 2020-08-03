import React from 'react';
import BellBag from '../../images/bellbag.png';

const CardValue = ({ value }) =>
  <span>
    <img src={BellBag} alt='Bell Bag' />
    { value }
  </span>

export default CardValue;
