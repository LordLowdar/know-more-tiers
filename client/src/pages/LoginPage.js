import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../utils/mutation';

import Auth from '../utils/auth';

export default function LoginPage() {
  const [loginCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [login, { error, data, loading }] = useMutation(LOGIN);
  let navigate = useNavigate();
  const onChange = (e) =>
    setCredentials({ ...loginCredentials, [e.target.name]: e.target.value });

  const loginProcess = async () => {
    if (loginCredentials.email && loginCredentials.password) {
      const { email, password } = loginCredentials;
      const { data } = await login({
        variables: {
          email,
          password,
        },
      });
      if (data) {
        Auth.login(data.login.token);
        navigate('/tierlist');
      }
    }
  };
  return (
    <div className="base">
      <div className="loginHeader">Login</div>
      <div className="content">
        <div className="loginForm">
          <div className="form-group">
            <label className="emailTitle" htmlFor="email">
              Email:
            </label>
            <input
              onChange={onChange}
              type="text"
              name="email"
              value={loginCredentials.email}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label className="passwordTitle" htmlFor="password">
              Password:
            </label>
            <input
              onChange={onChange}
              type="password"
              name="password"
              value={loginCredentials.password}
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <div className="loginFooter">
        <button type="submit" onClick={loginProcess} className="btn">
          Login
        </button>
      </div>
    </div>
  );
}
