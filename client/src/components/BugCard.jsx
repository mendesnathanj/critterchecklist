import React from 'react';
import Card from './Card';
import CardSummary from './CardSummary';
import CardInfo from './CardInfo';
import MonthSection from './MonthSection';
import TimeSection from './TimeSection';

export default function BugCard({ bug, statusData }) {
  return (
    <Card>
      <CardSummary critter={bug} statusData={statusData} />
      <CardInfo>
        <MonthSection months={bug.months} />
        <TimeSection timeFrames={bug.timeFrames} />
      </CardInfo>
    </Card>
  )
}
