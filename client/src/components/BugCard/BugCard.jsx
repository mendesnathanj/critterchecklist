import React from 'react';
import Card from '../Card/Card';
import CardSummary from '../CardSummary/CardSummary';
import CardInfo from '../CardInfo/CardInfo';
import MonthSection from '../MonthSection/MonthSection';
import TimeSection from '../TimeSection/TimeSection';
import LocationSection from '../LocationSection/LocationSection';

export default function BugCard({ bug, statusData }) {
  const { months, timeFrames, location } = bug;

  return (
    <Card>
      <CardSummary critter={bug} statusData={statusData} />
      <CardInfo>
        <MonthSection months={months} />
        <TimeSection timeFrames={timeFrames} />
        <LocationSection location={location} />
      </CardInfo>
    </Card>
  )
}
