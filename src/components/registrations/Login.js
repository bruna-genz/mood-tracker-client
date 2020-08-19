import React from 'react';
import Form from './Form';
import '../../assets/styles/Login.scss';

const Login = () => {
  const type = 'login';

  return (
    <div className="Login">
      <div className="header">
        <h2>Welcome to</h2>
        <h1>OhMyMood!</h1>
      </div>
      <div className="form-container">
        <h2>Log in to start</h2>
        <Form type={type} />
      </div>
    </div>
  );
};

export default Login;
