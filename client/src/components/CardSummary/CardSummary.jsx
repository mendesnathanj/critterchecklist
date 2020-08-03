import React from 'react';
import CardSection from '../CardSection/CardSection';
import CardTitle from '../CardTitle/CardTitle';
import CardValue from '../CardValue/CardValue';
import CardIcon from '../CardIcon/CardIcon';
import CardStatus from '../CardStatus/CardStatus';

const CardSummary = ({ critter: { id, name, value, imageUrl }, statusData }) =>
  <div>
    <CardSection>
      <CardTitle text={name} />
      <CardValue value={value} />
    </CardSection>
    <CardSection>
      <CardIcon src={imageUrl} alt={name} />
      <CardStatus id={id} statusData={statusData} collectibleType='Bug' />
    </CardSection>
  </div>

export default CardSummary;
