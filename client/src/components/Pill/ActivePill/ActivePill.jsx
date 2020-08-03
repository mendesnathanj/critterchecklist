import React from 'react';
import Pill from '../Pill';
import { active } from '../Pill.module.sass';


const ActivePill = ({ text }) =>
  <Pill text={text} variant={active} />


export default ActivePill;
