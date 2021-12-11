import React from 'react';
import demoImage1 from '../../assets/Animation1.gif'
import demoImage2 from '../../assets/connection.jpg'

export default function Demo() {
  return (
    <section className="demo-container">
      <div className="section-1">
          <p>Simply pick from a data-generated list of interests and drop it into your ranking tier.</p>
          <img src={demoImage1} alt="demo placeholder"></img>
      </div>
      <div className="section-2">
          <img src={demoImage2} alt="demo placeholder"></img>
          <p>Submit the tier list and find all your matches!</p>
      </div>
    </section>
  )
}
