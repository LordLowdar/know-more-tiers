import React from 'react';
import { Link } from 'react-router-dom';
import { Mission, Hero, NewList, Demo } from '../components';

export default function LandingPage() {
  return (
    <div className="landing">
      <Hero />
      <Mission />
      <Demo />
      <NewList />
    </div>
  );
}
