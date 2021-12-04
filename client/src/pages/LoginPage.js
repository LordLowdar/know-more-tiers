import React from 'react';

export default function LoginPage() {
  return (
    <div className="base">
      <div className="header">Login</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Login
        </button>
      </div>
    </div>
  );
}
