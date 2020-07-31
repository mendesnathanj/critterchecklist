import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function Card({ children }) {
  const container = useRef(null);

  const [height, setHeight] = useState(150);

  const clickHandler = () => {
    const scrollHeight = container.current.scrollHeight;

    height === scrollHeight ? setHeight(150) : setHeight(scrollHeight);
  }

  return (
    <div style={{ height: height + 'px', backgroundColor: 'salmon', overflow: 'hidden', transition: 'all 250ms ease-in-out' }} ref={container} onClick={clickHandler}>
      { children }
    </div>
  )
}
