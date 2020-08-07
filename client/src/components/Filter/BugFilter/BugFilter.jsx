import React from 'react';
import Filter from '../Filter';
import TogglePill from '../../Pill/TogglePill/TogglePill';
import Wrapper from '../../Wrapper/Wrapper';

const BugFilter = ({ filters, setFilters }) => {

  const leavesHandler = () =>
    setFilters({ ...filters, leavingThisMonth: !filters.leavingThisMonth });

  const arrivesHandler = () =>
    setFilters({ ...filters, arrivingThisMonth: !filters.arrivingThisMonth });

  // const notFoundHandler = () =>

  return (
    <Filter>
      <Wrapper>
        <TogglePill text='Leaving this month' handler={leavesHandler} />
      </Wrapper>
      <Wrapper>
        <TogglePill text='Arriving this month' handler={arrivesHandler} />
      </Wrapper>
      <Wrapper>
        {/* <TogglePill text='Not found right now' handler={} /> */}
      </Wrapper>
    </Filter>
  )
}

export default BugFilter;
