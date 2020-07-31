import React from 'react';

export default function Pill({ text, variant }) {
  return (
    <span className={variant}>{ text }</span>
  )
}
