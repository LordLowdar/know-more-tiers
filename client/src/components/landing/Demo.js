import React from 'react';
import demoImage1 from '../../assets/blue-network.jpg'

export default function Demo() {
  return (
    <section className="demo-container">
      <div className="section-1">
          <p>Simply pick from a data-generated list of interests and drop it into your ranking tier.</p>
          <img src={demoImage1} alt="demo placeholder"></img>
      </div>
      <div className="section-2">
          <img src={demoImage1} alt="demo placeholder"></img>
          <p>When you're done, submit the tier list.</p>
      </div>
      <div className="section-3">
          <p>Find all your matches!</p>
          <img src={demoImage1} alt="demo placeholder"></img>
      </div>
    </section>
  )
}
