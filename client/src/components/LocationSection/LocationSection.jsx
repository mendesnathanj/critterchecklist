import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import CardInfoSection from '../CardInfoSection/CardInfoSection';

const LocationSection = ({ location }) =>
  <CardInfoSection>
    <SectionTitle text='Location' />
    <span>{ location }</span>
  </CardInfoSection>

export default LocationSection;
