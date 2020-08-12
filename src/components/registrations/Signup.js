import React from 'react';
import Form from '../Form';

const Signup = props => {
  const { history, handleLogin } = props;
  const type = 'signup';

  return (
    <Form type={type} history={history} handleLogin={handleLogin} />
  );
};

export default Signup;
