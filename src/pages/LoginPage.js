import React from 'react';
import Header from '../components/Header';
import LoginContainer from '../components/LoginContainer';
import '../styles/Login.css';

function LoginPage() {

  return (
    <>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="main">
        <LoginContainer />
      </div>
    </>
  );
};

export default LoginPage
