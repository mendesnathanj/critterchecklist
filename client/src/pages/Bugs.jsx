import React from 'react';
import useBugs from '../hooks/useBugs';
import useFoundCollectibles from '../hooks/useFoundCollectibles';
import BugCard from '../components/BugCard/BugCard';
import CollectionLayout from '../components/CollectionLayout/CollectionLayout';
import PageContainer from '../components/PageContainer/PageContainer';
import BugFilter from '../components/Filter/BugFilter/BugFilter';
import { useState } from 'react';
import { filterByLeavingThisMonth, filterByArrivingThisMonth } from '../utils/functions';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useMemo } from 'react';

export default function Bugs() {
  const bugs = useBugs();
  const foundCollectibles = useFoundCollectibles('bug');

  const { user: { hemisphere } } = useContext(UserContext);

  const [filters, setFilters] = useState({
    leavingThisMonth: false,
    arrivingThisMonth: false,

  });

  const leavesThisMonthBugs = useMemo(() =>
    filterByLeavingThisMonth(bugs, hemisphere),
  [bugs, hemisphere]);

  const arrivingThisMonthBugs = useMemo(() =>
  filterByArrivingThisMonth(bugs, hemisphere),
  [bugs, hemisphere])

  if (bugs.length === 0) return <div>Loading...</div>;


  const filtered = (bugs) => {
    if (filters.leavingThisMonth)
      bugs = leavesThisMonthBugs;
      // bugs = filterByLeavingThisMonth(bugs, hemisphere);
    if (filters.arrivingThisMonth)
      bugs = arrivingThisMonthBugs;

    return bugs;
  }


  const bugsHtml = filtered(bugs).map(bug =>
    <BugCard key={bug.id} bug={bug} statusData={foundCollectibles[bug.id]} />);

  return (
    <PageContainer>
      <BugFilter filters={filters} setFilters={setFilters} />
      <CollectionLayout>
        {bugsHtml}
      </CollectionLayout>
    </PageContainer>
  )
};
