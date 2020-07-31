import React from 'react';
import CardSection from './CardSection';
import TimeFrame from './TimeFrame';
import SectionTitle from './SectionTitle';

export default function TimeSection({ timeFrames }) {
  const availableTimes = timeFrames.map((timeFrame, i) => <TimeFrame key={i} {...timeFrame} />);

  return (
    <CardSection>
      <SectionTitle text='Available Times' />
      <div>{ availableTimes }</div>
    </CardSection>
  )
}
