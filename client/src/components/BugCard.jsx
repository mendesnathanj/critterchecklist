import React from 'react';
import Card from './Card';
import CardSummary from './CardSummary';

export default function BugCard({ bug, statusData }) {
  return (
    <Card>
      <CardSummary critter={bug} statusData={statusData} />

    </Card>
  )
}
