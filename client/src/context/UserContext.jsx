import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(payload) {
    localStorage.setItem('token', payload.token);
    setUser(payload.user);
  }

  function logout() {
    localStorage.setItem('token', null);
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      { children }
    </UserContext.Provider>
  );
};
