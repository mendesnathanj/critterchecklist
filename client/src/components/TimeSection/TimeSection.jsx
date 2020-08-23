import React from 'react';
import TimeFrame from '../TimeFrame/TimeFrame';
import SectionTitle from '../SectionTitle/SectionTitle';
import CardInfoSection from '../CardInfoSection/CardInfoSection';

const TimeSection = ({ timeFrames }) => {
  const availableTimes = timeFrames.map((timeFrame, i) =>
    <TimeFrame key={i} {...timeFrame} />);

  return (
    <CardInfoSection>
      <SectionTitle text='Available Times' />
      <div>{ availableTimes }</div>
    </CardInfoSection>
  )
}

export default TimeSection;
