import React from 'react';
import useBugs from '../hooks/useBugs';
import useFoundCollectibles from '../hooks/useFoundCollectibles';
import BugCard from '../components/BugCard/BugCard';
import CollectionLayout from '../components/CollectionLayout/CollectionLayout';

export default function Bugs() {
  const bugs = useBugs();
  const foundCollectibles = useFoundCollectibles('bug');

  // console.log(foundCollectibles['1']);

  if (bugs.length === 0) return <div>Loading...</div>;

  const bugsHtml = bugs.map(bug => <BugCard key={bug.id} bug={bug} statusData={foundCollectibles[bug.id]} />);

  return (
    <div>
      <CollectionLayout>
        {bugsHtml}
      </CollectionLayout>
    </div>
  )
};
