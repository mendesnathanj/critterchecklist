import React from 'react';
import BellBag from '../../images/bellbag.png';

export default function CardValue({ value }) {
  return (
    <span>
      <img src={BellBag} alt='Bell Bag' />
      { value }
    </span>
  )
}
