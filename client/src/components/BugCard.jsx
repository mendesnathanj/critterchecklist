import React from 'react';

export default function BugCard({ bug }) {
  return (
    <div>
      <h3>{bug.name}</h3>
      <img src={`${process.env.REACT_APP_API_URL}${bug.imageUrl}`} alt={bug.name} />
    </div>
  )
}
