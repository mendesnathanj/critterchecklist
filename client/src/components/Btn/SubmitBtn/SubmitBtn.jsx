import React from 'react';
import Btn from '../Btn';
import { submitBtn } from './SubmitBtn.module.sass';

const SubmitBtn = ({ value }) =>
  <Btn variant={submitBtn} value={value} />

export default SubmitBtn;
