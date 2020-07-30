import { useState, useEffect } from 'react';
import { fetchFoundCollectibles } from '../api/foundCollectibles';
import normalize from 'json-api-normalizer';

export default function useFoundCollectibles(collectible_type = null) {
  const [collectibles, setCollectibles] = useState([]);

  useEffect(() => {
    fetchFoundCollectibles({ collectible_type })
    .then(res => {
      const found = {};
      const normalizedData = normalize(res.data);

      if (Object.keys(normalizedData).length === 0) {
        setCollectibles({});
        return;
      }

      const data = Object.values(normalizedData.foundCollectibles);

      data.forEach(foundCollectible => found[foundCollectible.attributes.collectibleId] = { id: foundCollectible.id, status: foundCollectible.attributes.status })
      setCollectibles(found);
    });
  }, [collectible_type]);

  return collectibles;
}
