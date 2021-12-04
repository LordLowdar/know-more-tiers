import React from 'react';

export default function RegisterPage() {
  return (
    <div className="base">
      <div className="loginHeader">Register</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label className="usernameTitle" htmlFor="username">
              Username:
            </label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label className="usernameTitle" htmlFor="email">
              Email:
            </label>
            <input type="text" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label className="passwordTitle" htmlFor="password">
              Password:
            </label>
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="loginFooter">
        <button type="button" className="btn">
          Register
        </button>
      </div>
    </div>
  );
}
