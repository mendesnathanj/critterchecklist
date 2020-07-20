import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch(login({ email, password }))
      .then((res) => console.log(res))
    }}>
      <div>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
      </div>
      <div>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  )
}
