import React from 'react';
import Pill from '../Pill';
import { inactive } from '../Pill.module.sass';


const InactivePill = ({ text }) =>
  <Pill text={text} variant={inactive} />


export default InactivePill;
