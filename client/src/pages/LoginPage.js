import React from 'react';

export default function LoginPage() {
  return (
    <div className="base">
      <div className="loginHeader">Login</div>
      <div className="content">
        <div className="loginForm">
          <div className="form-group">
            <label className="usernameTitle" htmlFor="username">
              Username:
            </label>
            <input type="text" name="username" placeholder="Username" />
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
          Login
        </button>
      </div>
    </div>
  );
}
