import React, { useState, useContext } from "react";
import { UserContext } from '../context/UserContext';
import axios from 'axios';

export default function Login({ history }) {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  function submit(event) {
    event.preventDefault();

    const user = { email, password };

    async function postUser() {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/login`, { user })
                        .catch(() => {
                          setErrors(["Invalid email/password"]);
                        });

      if (!res) return;

      login(res.data.token);
    };

    postUser();
  }

  const errorMessages = errors.map(error => <div key={error}>{ error }</div>);

  return (
    <div>
      Login here!
      {errorMessages}
      <form onSubmit={submit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
