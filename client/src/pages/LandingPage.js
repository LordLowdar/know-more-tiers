import React from 'react';
import { Link } from 'react-router-dom';
import { Mission, Hero, NewList } from '../components';

export default function Landing() {

  return (
    <div className="landing">
      <Mission />
      <Hero />
      <NewList />
      <Link to="/tierlist" className="btn">Create Tierlist</Link>
    </div>
  )
}
