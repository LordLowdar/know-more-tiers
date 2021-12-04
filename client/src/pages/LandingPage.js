import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {

  return (
    <div className="landing">
      <section><h1>HERO</h1></section>
      <section><h1>NEWLIST</h1></section>
      <Link to="/tierlist" className="btn">Create Tierlist</Link>
    </div>
  )
}
