import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './LoginContainer.css';

function LoginContainer() {
  const [loginControl, setLoginControl] = useState('');
  const [pwdControl, setPwdControl] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(null);
  const [passwordInvalid, setPasswordInvalid] = useState(null);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if(!isEmailValid(loginControl)) {
      setEmailInvalid('true');
      if(pwdControl.length < 6) {
        setPasswordInvalid('true')
      }
    } else if(pwdControl.length < 6 ) {
      setPasswordInvalid('true');
    } else {
      navigate('/home');
    }
  }
  return (
    <div className="loginContainer">
      <form>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          className="emailInput"
          value={ loginControl }
          onChange={({target: {value}}) => {
            setEmailInvalid('');
            setLoginControl(value);
          }}
        />
        { emailInvalid === 'true' ? <small className="invalid">Please use a valid email format</small> : ''}
        <input
          type="password"
          placeholder="Password"
          className="passwordInput"
          value={ pwdControl }
          onChange={({target: {value}}) => {
            setPasswordInvalid('')
            setPwdControl(value);
          }} 
        />
        { passwordInvalid === 'true' ? <small className="invalid">Your password must be at least 6 characters long</small> : '' }
        <button
          tyṕe="button"
          className="signInButton"
          onClick={(e) => {handleClick(e)}}
        >
          Sign in
        </button>
      </form>
      <div className="contacts">
        <a href="https://github.com/serpaef/" target="_blank" className="contLink" rel="noreferrer"><button className="linkButton" type="button"><GitHubIcon sx={{fontSize: 50}}/>/serpaef</button></a>
        <a href="https://www.linkedin.com/in/serpaef/" target="_blank" className="contLink" rel="noreferrer"><button className="linkButton" type="button"><LinkedInIcon sx={{fontSize: 50}}/>/serpaef</button></a>
      </div>
    </div>
  )
}

export default LoginContainer
