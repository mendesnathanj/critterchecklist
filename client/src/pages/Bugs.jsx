import React from 'react';
import useBugs from '../hooks/useBugs';
import useFoundCollectibles from '../hooks/useFoundCollectibles';
import BugCard from '../components/BugCard/BugCard';
import CollectionLayout from '../components/CollectionLayout/CollectionLayout';
import PageContainer from '../components/PageContainer/PageContainer';
import BugFilter from '../components/Filter/BugFilter/BugFilter';
import { useState } from 'react';
import * as filterFuncs from '../utils/filters';
import { monthlyFilters } from '../utils/constants';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Bugs() {
  const bugs = useBugs();
  const foundCollectibles = useFoundCollectibles('bug');

  const { user: { hemisphere } } = useContext(UserContext);

  const [filters, setFilters] = useState({
    ...monthlyFilters,
    currentLocation: 'Any',
  });

  console.log(filters);

  if (bugs.length === 0) return <div>Loading...</div>;

  // console.log(bugs);

  const locations = Array.from(new Set(bugs.map(bug => bug.location)));

  if (filters.currentLocation !== 'Any') {
    locations.unshift('Any');
    locations.splice(locations.indexOf(filters.currentLocation), 1);
  }

  console.log(filters.currentLocation);
  const filtered = (bugs) => {
    if (filters.leavingThisMonth)
      bugs = filterFuncs.filterByLeavingThisMonth(bugs, hemisphere);
    if (filters.arrivingThisMonth)
      bugs = filterFuncs.filterByArrivingThisMonth(bugs, hemisphere);
    if (filters.availableThisMonth)
      bugs = filterFuncs.filterByFoundThisMonth(bugs, hemisphere);
    if (filters.currentLocation !== 'Any')
      bugs = filterFuncs.filterByLocation(bugs, filters.currentLocation);

    return bugs;
  }



  const bugsHtml = filtered(bugs).map(bug =>
    <BugCard key={bug.id} bug={bug} statusData={foundCollectibles[bug.id]} />);

  return (
    <PageContainer>
      <BugFilter
        filters={filters}
        setFilters={setFilters}
        locations={locations} />
      <CollectionLayout>
        {bugsHtml}
      </CollectionLayout>
    </PageContainer>
  )
};
