import React from 'react';
import CardSection from '../CardSection/CardSection';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function LocationSection({ location }) {
  return (
    <CardSection>
      <SectionTitle text='Location' />
      <span>{ location }</span>
    </CardSection>
  )
}
