import React, { useState } from 'react';

export default function CardStatus({ id, initialStatus, collectibleType }) {
  const [status, setStatus] = useState(initialStatus);

  function clickHandler() {
    
  }

  return (
    <div>
      <p>{ status }</p>
    </div>
  )
}
