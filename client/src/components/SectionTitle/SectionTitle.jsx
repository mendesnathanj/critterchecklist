import React from 'react';
import { sectionTitle } from './SectionTitle.module.sass';

const SectionTitle = ({ text }) =>
  <h4 className={sectionTitle}>{ text }</h4>

export default SectionTitle;
