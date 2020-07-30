import { useState, useEffect } from 'react';
import { fetchBugs } from '../api/bugs';
import normalize from 'json-api-normalizer';

export default function useBugs() {
  const [bugs, setBugs] = useState([]);
  const [params, setParams] = useState({ page: 1 });

  useEffect(() => {
    async function fetchData() {
      const res = await fetchBugs(params);

      const data = normalize(res.data)

      const bugs = Object.values(data.bugs).map(bug => {
        bug.attributes.id = bug.id;
        bug = bug.attributes;
        bug.months = bug.months.map(id => data.foundMonths[id].attributes);
        bug.timeFrames = bug.timeFrames.map(id => data.timeFrames[id].attributes);
        bug.location = data.locations[bug.location].attributes.name;

        return bug;
      });

      setBugs(bugs);
      setParams({});
    }

    fetchData();
  }, [params.page]);

  return bugs;
}
