import React from 'react';
import CardSection from './CardSection';
import CardTitle from './CardTitle';
import CardValue from './CardValue';
import CardIcon from './CardIcon';

export default function CardSummary({ critter: { id, name, value, imageUrl }, status }) {
  return (
    <div>
      <CardSection>
        <CardTitle text={name} />
        <CardValue value={value} />
      </CardSection>
      <CardSection>
        <CardIcon src={imageUrl} alt={name} />
      </CardSection>
    </div>
  )
}
