import React from 'react';
import Filter from '../Filter';
import MonthFilters from '../../MonthFilters/MonthFilters';
import LocationFilter from '../../LocationFilter/LocationFilter';

const BugFilter = ({ filters, setFilters, locations }) => {

  return (
    <Filter>
      <MonthFilters filters={filters} setFilters={setFilters} />
      <LocationFilter
        filters={filters}
        setFilters={setFilters}
        locations={locations} />
    </Filter>
  )
}

export default BugFilter;
