import React from 'react';
import CardSection from './CardSection';
import { monthNames } from '../utils/constants';
import ActivePill from './ActivePill';
import InactivePill from './InactivePill';

export default function MonthSection({ months }) {
  const currentHemisphere = 'north';

  const availableMonths = new Set(months
                                  .filter(month => month.hemisphere === currentHemisphere)
                                  .map(month => month.name));

  const pills = monthNames.map(name =>
    availableMonths.has(name) ? <ActivePill key={name} text={name} /> : <InactivePill key={name} text={name} />
  );

  return (
    <CardSection>
      <h4>Seasons</h4>
      <div>
        { pills }
      </div>
    </CardSection>
  )
}
