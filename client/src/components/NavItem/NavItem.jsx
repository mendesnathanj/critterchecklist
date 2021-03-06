import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ location, text, fn }) => {
  if (fn) return <NavLink to={`/${location}`} onClick={fn}>{ text }</NavLink>;

  return <NavLink to={`/${location}`}>{ text }</NavLink>;
}

export default NavItem;
