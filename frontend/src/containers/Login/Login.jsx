// Import react
import React from 'react';

// Import the login stylesheet
import './login.css';

// Import the login form
import LoginForm from './Form/LoginForm.jsx';

const Login = () => {
  return (
    <section className="login__container">
      <header className="login_header">
        <div className="flex__left"></div>
        <div className="header_content">
          <h1>Sign In</h1>
        </div>
        <div className="flex__right"></div>
        <div className="header_image_overlay"></div>
      </header>
      <div className="login_body">
        <div className="flex__left"></div>
        <div className="form_container">
          <div className="row">
            <LoginForm />
            <div className="auth__errors"></div>
          </div>
        </div>
        <div className="flex__right"></div>
      </div>
      <div className="flex_bottom"></div>
    </section>
  );
}

export default Login