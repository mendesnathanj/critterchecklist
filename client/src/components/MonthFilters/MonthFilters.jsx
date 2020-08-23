import React from 'react';
import { useState } from 'react';
import Pill from '../Pill/Pill';
import { active, inactive, cursorable } from '../Pill/Pill.module.sass';
import Wrapper from '../Wrapper/Wrapper';
import FlexContainer from '../FlexContainer/FlexContainer';
import { cn } from '../../utils/functions';

const MonthFilters = ({ filters, setFilters }) => {
  const [pillsVariant, setPillsVariant] = useState({
    current: false,
    leaves: false,
    arrives: false
  });

  const { current, leaves, arrives } = pillsVariant;

  const leavesHandler = () => {
    setFilters({
      ...filters,
      leavingThisMonth: !filters.leavingThisMonth,
      arrivingThisMonth: false,
      availableThisMonth: false
    });
    setPillsVariant({ current: false, leaves: !leaves, arrives: false });
  }

  const arrivesHandler = () => {
    setFilters({
      ...filters,
      arrivingThisMonth: !filters.arrivingThisMonth,
      leavingThisMonth: false,
      availableThisMonth: false
    });
    setPillsVariant({ current: false, leaves: false, arrives: !arrives });
  }

  const thisMonthHandler = () => {
    setFilters({
      ...filters,
      availableThisMonth: !filters.availableThisMonth,
      leavingThisMonth: false,
      arrivingThisMonth: false
    });

    setPillsVariant({ current: !current, leaves: false, arrives: false });
  }

  return (
    <div>
      <FlexContainer>
        <Wrapper>
          <Pill
            text='Available this month'
            variant={cn(cursorable, current ? active : inactive)}
            handler={thisMonthHandler} />
        </Wrapper>
        <Wrapper>
          <Pill
            text='Arriving this month'
            variant={cn(cursorable, arrives ? active : inactive)}
            handler={arrivesHandler} />
        </Wrapper>
        <Wrapper>
          <Pill
            text='Leaving this month'
            variant={cn(cursorable, leaves ? active : inactive)}
            handler={leavesHandler} />
        </Wrapper>
      </FlexContainer>
    </div>
  )
};

export default MonthFilters;
