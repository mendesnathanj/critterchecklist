import React from 'react';
import useBugs from '../hooks/useBugs';
import useFoundCollectibles from '../hooks/useFoundCollectibles';
import BugCard from '../components/BugCard/BugCard';
import CollectionLayout from '../components/CollectionLayout/CollectionLayout';
import Filter from '../components/Filter/Filter';
import PageContainer from '../components/PageContainer/PageContainer';
import TogglePill from '../components/Pill/TogglePill/TogglePill';
import { filterByLocation, filterByLeavingThisMonth, filterByArrivingThisMonth } from '../utils/functions';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Bugs() {
  const bugs = useBugs();

  const { user: { hemisphere } } = useContext(UserContext);

  console.log(hemisphere);

  const [filters, setFilters] = useState({ location: null });

  const foundCollectibles = useFoundCollectibles('bug');

  if (bugs.length === 0) return <div>Loading...</div>;

  console.log(bugs);
  console.log(filterByLeavingThisMonth(bugs, hemisphere));
  console.log(filterByArrivingThisMonth(bugs, hemisphere));
  const applyFilters = () => {

  };
  const filterLocation = () => {
    if (filters.location)
      setFilters({ ...filters, location: null });
    else
      setFilters({ ...filters, location: 'Flying' });
  }

  const filtered = () => {
    let newBugs = bugs;
    if (filters.location)
      newBugs = filterByLocation(bugs, filters.location);

    return newBugs;
  }

  const bugsHtml = filtered(bugs).map(bug =>
    <BugCard key={bug.id} bug={bug} statusData={foundCollectibles[bug.id]} />);

  return (
    <PageContainer>
      <Filter>
        <TogglePill handler={filterLocation} text='Flying' />
      </Filter>
      <CollectionLayout>
        {bugsHtml}
      </CollectionLayout>
    </PageContainer>
  )
};

const initialFilters = {
  leavingThisMonth: {
    active: false,
    fn: (collectible) => {

    }
  }
};
