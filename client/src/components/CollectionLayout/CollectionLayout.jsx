import React from 'react';
import { collectionLayout } from './CollectionLayout.module.sass';

const CollectionLayout = ({ children }) =>
  <div className={collectionLayout}>{ children }</div>

export default CollectionLayout;
