import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import { Container, Form } from 'react-bootstrap';

function LoginPage() {
  const [loginControl, setLoginControl] = useState('');
  const [pwdControl, setPwdControl] = useState('');
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  const isDisabled = () => {
    if(pwdControl.length < 6 || !isEmailValid(loginControl)){
      return true;
    }
    return false;
  }

  const handleClick = () => {
    navigate('/home');
  }

  return (
    <>
      <Header />
      <Container fluid className="main">
        <Form className="loginContainer">
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Enter email"
            value={loginControl}
            onChange={({target: {value}}) => { setLoginControl(value) }}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={ pwdControl }
            onChange={({target: {value}}) => { setPwdControl(value)}}
          />
          <input type="button" onClick={ handleClick } value="Sign In" disabled={ isDisabled() } />
        </Form>
      </Container>
    </>
  );
};

export default LoginPage
