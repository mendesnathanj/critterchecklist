import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { card } from './Card.module.sass';
import Wrapper from '../Wrapper/Wrapper';

const Card = ({ children }) => {
  const container = useRef(null);

  const defaultHeight = 116;

  const [height, setHeight] = useState(defaultHeight);

  const clickHandler = (e) => {
    if (e.target !== e.currentTarget) return;

    const scrollHeight = container.current.scrollHeight;

    height === scrollHeight ? setHeight(defaultHeight) : setHeight(scrollHeight);
  }

  return (
    <Wrapper>
      <div
        style={{ height: `${height}px`}}
        className={card}
        ref={container}
        onClick={clickHandler}>
        {children}
      </div>
    </Wrapper>
  )
}

export default Card;
