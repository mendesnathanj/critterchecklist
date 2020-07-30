import React, { useState } from 'react';

export default function CardStatus({ initialStatus }) {
  const [status, setStatus] = useState(initialStatus);

  return (
    <div>
      <p>{ status }</p>
    </div>
  )
}
