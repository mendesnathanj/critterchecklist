import React, { useState } from 'react';
import { active, inactive } from '../Pill.module.sass';
import Pill from '../Pill';

const TogglePill = ({ text, handler }) => {
  const [activeClass, setActiveClass] = useState(inactive);

  const handlerWrapper = () => {
    handler();
    if (activeClass === active) setActiveClass(inactive);
    else setActiveClass(active);
  }

  return <Pill text={text} variant={activeClass} handler={handlerWrapper} />
}

export default TogglePill;
