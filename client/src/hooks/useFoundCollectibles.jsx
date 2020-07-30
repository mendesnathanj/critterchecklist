import { useState, useEffect } from 'react';
import { fetchFoundCollectibles } from '../api/foundCollectibles';
import normalize from 'json-api-normalizer';

export default function useFoundCollectibles(collectible_type = null) {
  const [collectibles, setCollectibles] = useState([]);

  useEffect(() => {
    fetchFoundCollectibles({ collectible_type })
    .then(res => {
      const found = {};
      Object.values(normalize(res.data).foundCollectibles).forEach(foundCollectible => found[foundCollectible.attributes.collectibleId] = foundCollectible.attributes.status);
      setCollectibles(found);
    });
  }, [collectible_type]);

  return collectibles;
}
