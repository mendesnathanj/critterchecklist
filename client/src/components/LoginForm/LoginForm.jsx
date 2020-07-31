import React, { useState, useContext } from "react";
import { UserContext } from '../../context/UserContext';
import FormInput from "../FormInput/FormInput";
import { loginUser } from "../../api/auth";
import SubmitBtn from "../Btn/SubmitBtn/SubmitBtn";

export default function LoginForm() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const errorMessages = errors.map(error => <div key={error}>{error}</div>);

  function submit(e) {
    e.preventDefault();

    loginUser({ email, password })
      .then(res => login(res.data.token))
      .catch(() => setErrors(['Invalid email/password']));
  }

  return (
    <div>
      Login here!
      {errorMessages}
      <form onSubmit={submit}>
        <FormInput label="Email" type="text" value={email} setter={setEmail} />
        <FormInput label="Password" type="password" value={password} setter={setPassword} />
        <SubmitBtn value='Login' />
      </form>
    </div>
  )

}
