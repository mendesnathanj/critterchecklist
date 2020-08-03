import React, { useState } from 'react';
import { createFoundCollectible, updateFoundCollectible, deleteFoundCollectible } from '../../api/foundCollectibles';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const CardStatus = ({ id, statusData = {}, collectibleType}) => {
  const initialStatus = statusData ? statusData.status : 'Not Found';

  const [status, setStatus] = useState(initialStatus);
  const [collectibleId, setCollectibleId] = useState(statusData.id);

  const { user } = useContext(UserContext);

  const clickHandler = async () => {
    let res;

    try {
      if (status === 'Found')
        res = await updateFoundCollectible({ id: collectibleId,
                                             status: 'Donated' });
      else if (status === 'Donated')
        res = await deleteFoundCollectible(collectibleId);
      else
        res = await createFoundCollectible({ user_id: user.id,
                                             collectible_type: collectibleType,
                                             collectible_id: id });

      if (Object.keys(res.data).length === 0) {
        setStatus('Not Found');
      }
      else {
        setStatus(res.data.status);
        setCollectibleId(res.data.id);
      }
    } catch (e) {
      return new Error();
    }
  };

  return (
    <div onClick={clickHandler}>
      <p>{status}</p>
    </div>
  )
};

export default CardStatus;
