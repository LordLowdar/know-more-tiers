import React from 'react';
import { Link } from 'react-router-dom';
import { Mission, Hero } from '../components';
import NewList from '../features/newlist/NewList';

export default function LandingPage() {

  return (
    <div className="landing">
      <Mission />
      <Hero />
      <NewList />
      <Link to="/tierlist" className="btn">Create Tierlist</Link>
    </div>
  )
}
