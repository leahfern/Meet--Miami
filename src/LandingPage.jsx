import React from 'react'
import {Link} from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <h1 className="main-title">Meet Miami</h1>
      <Link to="/map">Check out our map</Link>
    </div>
  )
}