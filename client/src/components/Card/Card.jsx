import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Card = ({ children }) => {
  const container = useRef(null);

  const [height, setHeight] = useState(550);

  const clickHandler = (e) => {
    if (e.target !== e.currentTarget) return;

    const scrollHeight = container.current.scrollHeight;

    height === scrollHeight ? setHeight(150) : setHeight(scrollHeight);
  }

  return (
    <div style={{ height: height + 'px' }} ref={container} onClick={clickHandler}>
      {children}
    </div>
  )
}

export default Card;
