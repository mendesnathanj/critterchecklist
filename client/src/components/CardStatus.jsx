import React, { useState } from 'react';
import { createFoundCollectible, updateFoundCollectible, deleteFoundCollectible } from '../api/foundCollectibles';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function CardStatus({ id, statusData, collectibleType }) {
  const [status, setStatus] = useState(statusData === undefined ? 'Not Found' : statusData.status);
  const [collectibleId, setCollectibleId] = useState(statusData === undefined ? null : statusData.id);

  const { user } = useContext(UserContext);

  async function clickHandler() {
    let res;

    try {
      if (status === 'Found')
        res = await updateFoundCollectible({ id: collectibleId, status: 'Donated' });
      else if (status === 'Donated')
        res = await deleteFoundCollectible(collectibleId);
      else
        res = await createFoundCollectible({ user_id: user.id, collectible_type: collectibleType, collectible_id: id });

      if (Object.keys(res.data).length === 0) {
        setStatus('Not Found');
      }
      else {
        setStatus(res.data.status);
        setCollectibleId(res.data.id);
      }

    } catch(e) {
      return new Error();
    }
  }

  return (
    <div onClick={clickHandler}>
      <p>{ status }</p>
    </div>
  )
}
