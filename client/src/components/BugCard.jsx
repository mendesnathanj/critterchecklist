import React from 'react';
import Card from './Card';
import CardSummary from './CardSummary';

export default function BugCard({ bug, status }) {
  return (
    <Card>
      <CardSummary critter={bug} status={status} />
      <h3>{bug.name}</h3>
      <img src={`${process.env.REACT_APP_API_URL}${bug.imageUrl}`} alt={bug.name} />
    </Card>
  )
}
