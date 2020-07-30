import React from 'react';
import Card from './Card';
import CardSummary from './CardSummary';

export default function BugCard({ bug, status }) {
  return (
    <Card>
      <CardSummary critter={bug} status={status} />

    </Card>
  )
}
