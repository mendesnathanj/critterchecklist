import React from 'react';
import Card from './Card';

export default function BugCard({ bug, status }) {
  return (
    <Card>
      <h3>{bug.name}</h3>
      <img src={`${process.env.REACT_APP_API_URL}${bug.imageUrl}`} alt={bug.name} />
    </Card>
  )
}
