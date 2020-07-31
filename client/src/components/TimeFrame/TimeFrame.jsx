import React from 'react';

export default function TimeFrame({ start, end }) {
  if (start === 0 && end === 0) return <span>All Day</span>;

  const startText = start < 12 ? `${start} AM` : `${start % 12} PM`;
  const endText = end < 12 ? `${end} AM` : `${end % 12} PM`;

  return (
    <span>{ startText } - { endText }</span>
  )
}
