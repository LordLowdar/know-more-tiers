import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTER } from '../utils/mutation';
import Auth from '../utils/auth.js';

export default function RegisterPage() {
  const [newCredentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [register, { error, data, loading }] = useMutation(REGISTER);
  const onChange = (e) =>
    setCredentials({ ...newCredentials, [e.target.name]: e.target.value });

  let navigate = useNavigate();

  const registration = async () => {
    if (
      newCredentials.username &&
      newCredentials.email &&
      newCredentials.password
    ) {
      const { username, email, password } = newCredentials;
      const { data } = await register({
        variables: {
          username,
          email,
          password,
        },
      });
      if (data) {
        console.log('log whatevr');
        Auth.login(data.addUser.token);
        navigate('/tierlist');
      }
    }
  };
  return (
    <div className="base">
      <div className="loginHeader">Register</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label className="usernameTitle" htmlFor="username">
              Username:
            </label>
            <input
              onChange={onChange}
              type="text"
              name="username"
              value={newCredentials.username}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label className="usernameTitle" htmlFor="email">
              Email:
            </label>
            <input
              onChange={onChange}
              type="email"
              name="email"
              value={newCredentials.email}
              placeholder="email"
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
              value={newCredentials.password}
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <div className="loginFooter">
        <button type="submit" onClick={registration} className="btn">
          Register
        </button>
      </div>
    </div>
  );
}
