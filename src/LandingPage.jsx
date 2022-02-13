import React from 'react'
import {Link} from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="main-body-container">
        <h1 className="main-title">Meet Miami</h1>
        <h2>And Explore the Vibrant Art & Cultural Scene</h2>
        <Link to="/map">Discover</Link>
      </div>
    </div>
  )
}