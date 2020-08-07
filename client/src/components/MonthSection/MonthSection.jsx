import React from 'react';
import { monthNames } from '../../utils/constants';
import ActivePill from '../Pill/ActivePill/ActivePill';
import InactivePill from '../Pill/InactivePill/InactivePill';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import SectionTitle from '../SectionTitle/SectionTitle';
import FlexContainer from '../FlexContainer/FlexContainer';
import MonthPillWrapper from '../MonthPillWrapper/MonthPillWrapper';
import CardInfoSection from '../CardInfoSection/CardInfoSection';

const MonthSection = ({ months }) => {
  const { user: { hemisphere: currentHemisphere } } = useContext(UserContext);

  const filteredMonths = months
                        .filter(month => month.hemisphere === currentHemisphere)
                        .map(month => month.name);

  const availableMonths = new Set(filteredMonths);

  const pills = monthNames.map(name => {
    if (availableMonths.has(name)) return <ActivePill key={name} text={name} />;

    return <InactivePill key={name} text={name} />;
  })
  .map((pill, i) =>
    <MonthPillWrapper key={i}>{pill}</MonthPillWrapper>
  );

  return (
    <CardInfoSection>
      <SectionTitle text='Season' />
      <FlexContainer>
        { pills }
      </FlexContainer>
    </CardInfoSection>
  )
}

export default MonthSection;
