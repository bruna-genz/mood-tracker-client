import React from 'react';
import Form from './Form';
import '../../assets/styles/Signup.scss';

const Signup = () => {
  const type = 'signup';

  return (
    <div className="Signup">
      <h2>Sign up and start tracking you mood!</h2>
      <Form type={type} />
    </div>
  );
};

export default Signup;
