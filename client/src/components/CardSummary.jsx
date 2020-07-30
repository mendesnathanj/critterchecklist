import React from 'react';
import CardSection from './CardSection';
import CardTitle from './CardTitle';
import CardValue from './CardValue';

export default function CardSummary({ critter: { id, name, value }, status }) {
  return (
    <div>
      <CardSection>
        <CardTitle text={name} />
        <CardValue value={value} />
      </CardSection>
      <CardSection>
        
      </CardSection>
    </div>
  )
}
