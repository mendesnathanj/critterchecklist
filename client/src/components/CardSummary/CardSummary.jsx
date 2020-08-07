import React from 'react';
import CardSummarySection from '../CardSummarySection/CardSummarySection';
import CardTitle from '../CardTitle/CardTitle';
import CardValue from '../CardValue/CardValue';
import CollectibleImage from '../CollectibleImage/CollectibleImage';
import CollectibleStatusPill from '../Pill/CollectibleStatusPill/CollectibleStatusPill';
import { cn } from '../../utils/functions';
import { dFlex, spaceBetween, alignBottom } from '../../styles/Display.module.sass';
import { cardSummary, marginTop } from './CardSummary.module.sass';
import Divider from '../Divider/Divider';

const CardSummary = ({ critter: { id, name, value, imageUrl }, statusData }) =>
  <div className={cn(dFlex, spaceBetween, cardSummary)}>
    <CardSummarySection>
      <CardTitle text={name} />
      <CardValue value={value} />
    </CardSummarySection>
    <CardSummarySection override={alignBottom}>
      <CollectibleImage src={imageUrl} alt={name} />
      <CollectibleStatusPill
        id={id}
        statusData={statusData}
        collectibleType='Bug' />
      <Divider additionalClasses={marginTop} />
    </CardSummarySection>
  </div>

export default CardSummary;
