import React from 'react';
import CardSection from '../CardSection/CardSection';
import SectionTitle from '../SectionTitle/SectionTitle';

const LocationSection = ({ location }) =>
  <CardSection>
    <SectionTitle text='Location' />
    <span>{ location }</span>
  </CardSection>

export default LocationSection;
