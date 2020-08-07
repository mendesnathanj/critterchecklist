import React from 'react';
import { pageContainer } from './PageContainer.module.sass';

const PageContainer = ({ children }) =>
  <div className={pageContainer}>{ children }</div>

export default PageContainer;
