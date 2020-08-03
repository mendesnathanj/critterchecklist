import React from 'react';
import CardSection from '../CardSection/CardSection';
import TimeFrame from '../TimeFrame/TimeFrame';
import SectionTitle from '../SectionTitle/SectionTitle';

const TimeSection = ({ timeFrames }) => {
  const availableTimes = timeFrames.map((timeFrame, i) =>
    <TimeFrame key={i} {...timeFrame} />);

  return (
    <CardSection>
      <SectionTitle text='Available Times' />
      <div>{ availableTimes }</div>
    </CardSection>
  )
}

export default TimeSection;
