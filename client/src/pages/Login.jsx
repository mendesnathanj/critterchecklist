import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <div>
      <Link to='/test_page'>Test Page</Link>
      Hewwo there i am the wogin page!!!
      <LoginForm />
    </div>
  )
}
