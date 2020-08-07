import React from 'react';
import { filter } from './Filter.module.sass';

const Filter = ({ children }) =>
  <div className={filter}>{ children }</div>

export default Filter;
