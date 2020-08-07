import React, { useReducer } from 'react';
import { createFoundCollectible,
         updateFoundCollectible,
         deleteFoundCollectible } from '../../../api/foundCollectibles';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import Pill from '../Pill';
import styles from './CollectibleStatusPill.module.sass';
import { cn } from '../../../utils/functions';

const CollectibleStatusPill = ({ id, statusData = {}, collectibleType}) => {
  const [state, dispatch] = useReducer(reducer, initialState(statusData));
  const { status, collectibleId, pillStatus } = state;
  const { user, logout } = useContext(UserContext);

  const clickHandler = async () => {
    let res;

    try {
      if (status === 'Found') {
        const data = { id: collectibleId, status: 'Donated' };
        res = await updateFoundCollectible(data);

        dispatch({ type: 'DONATED', collectibleId: res.data.id})
      } else if (status === 'Donated') {
        res = await deleteFoundCollectible(collectibleId);

        dispatch({ type: 'NOT_FOUND' });
      } else {
        const data = {
          user_id: user.id,
          collectible_type: collectibleType,
          collectible_id: id
        };

        res = await createFoundCollectible(data);

        dispatch({ type: 'FOUND', collectibleId: res.data.id });
      }
    } catch (_) {
      logout();
    }
  };

  return <Pill
            text={status}
            variant={cn(styles.collectibleStatusPill, pillStatus)}
            handler={clickHandler}
          />;
};

const initialState = statusData => {
  let pillStatus;
  if (statusData.status === 'Donated') pillStatus = styles.donated;
  else if (statusData.status === 'Found') pillStatus = styles.found;
  else pillStatus = styles.notFound;

  return {
    status: statusData.status ? statusData.status : 'Not Found',
    collectibleId: statusData.id,
    pillStatus: cn(styles.collectibleStatusPill, pillStatus)
  };
}

const reducer = (_, action) => {
  switch(action.type) {
    case 'DONATED':
      return {
        status: 'Donated',
        collectibleId: action.collectibleId,
        pillStatus: styles.donated
      };
    case 'FOUND':
      return {
        status: 'Found',
        collectibleId: action.collectibleId,
        pillStatus: styles.found
      };
    case 'NOT_FOUND':
      return {
        status: 'Not Found',
        collectibleId: undefined,
        pillStatus: styles.notFound
      };
    default:
      return {
        status: 'Not Found',
        collectibleId: undefined,
        pillStatus: styles.notFound
      };
  }
};

export default CollectibleStatusPill;
