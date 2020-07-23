import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(initialState());

  function login(token) {
    localStorage.setItem('token', token);
    setUser(jwt_decode(token));
  }

  function logout() {
    localStorage.setItem('token', null);
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      { children }
    </UserContext.Provider>
  )
};

function initialState() {
  const token = localStorage.getItem('token');
  if (token) return jwt_decode(token);

  return null;
}
