import React from 'react';
import Form from '../Form';

const Login = props => {
  const { history, handleLogin } = props;
  const type = 'login';

  return (
    <Form type={type} history={history} handleLogin={handleLogin} />
  );
};

export default Login;
