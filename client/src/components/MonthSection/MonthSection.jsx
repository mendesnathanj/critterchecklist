import React from 'react';
import CardSection from '../CardSection/CardSection';
import { monthNames } from '../../utils/constants';
import ActivePill from '../ActivePill/ActivePill';
import InactivePill from '../InactivePill/InactivePill';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function MonthSection({ months }) {
  const { user: { hemisphere: currentHemisphere } } = useContext(UserContext);

  const filteredMonths = months
                        .filter(month => month.hemisphere === currentHemisphere)
                        .map(month => month.name);

  const availableMonths = new Set(filteredMonths);

  const pills = monthNames.map(name =>
    availableMonths.has(name) ? <ActivePill key={name} text={name} /> : <InactivePill key={name} text={name} />
  );

  return (
    <CardSection>
      <SectionTitle text='Seasons' />
      <div>
        { pills }
      </div>
    </CardSection>
  )
}
