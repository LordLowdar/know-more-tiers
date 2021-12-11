import React from 'react';
import Auth from '../../utils/auth.js';
import { useNavigate } from 'react-router-dom';

export default function NewList() {
  let navigate = useNavigate();

  function check() {
    if (Auth.loggedIn()) {
      navigate('/tierlist');
    } else {
      navigate('/register');
    }
  }

  return (
    <section className="new-list">
      {/* Placing TierList Logic Placeholder for now */}
      <h1>READY TO GET STARTED?</h1>
      <button className="btn" onClick={check}>
        Create Your Own Tier List
      </button>
    </section>
  );
}
