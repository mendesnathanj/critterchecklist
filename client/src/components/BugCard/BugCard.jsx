import React from 'react';
import Card from '../Card/Card';
import CardSummary from '../CardSummary/CardSummary';
import CardInfo from '../CardInfo/CardInfo';
import MonthSection from '../MonthSection/MonthSection';
import TimeSection from '../TimeSection/TimeSection';
import LocationSection from '../LocationSection/LocationSection';


const BugCard = ({ bug, statusData }) =>
  <Card>
    <CardSummary critter={bug} statusData={statusData} />
    <CardInfo>
      <MonthSection months={bug.months} />
      <TimeSection timeFrames={bug.timeFrames} />
      <LocationSection location={bug.location} />
    </CardInfo>
  </Card>


export default BugCard;
