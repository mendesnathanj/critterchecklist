import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import NavItem from '../NavItem/NavItem';

const Nav = () => {
  const { user, logout } = useContext(UserContext);

  let links;
  if (user)
    links = [
      { location: "", text: 'Home' },
      { location: "bugs", text: 'Bugs' },
      { location: "logout", text: 'Logout', fn: logout }
    ];
  else
    links = [
      { location: 'login', text: 'Login' }
    ]

  const navItems = links.map(link =>
    <NavItem key={link.location} {...link} />
  );

  return (
    <div>
      <nav>
        { navItems }
      </nav>
    </div>
  )
}

export default Nav;
