import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import poiImage1 from 

export default function MiniIcon({ neighborhood, setActiveNeighborhood }) {  
  const [isActive, setIsActive] = useState(false);
  console.log(neighborhood);
  
  function makeActive() {
    setIsActive(true);
    setActiveNeighborhood(neighborhood);
  }
    function makeInactive() {
    setIsActive(false);
  }

  return (
    <Link to="/popup" onMouseEnter={makeActive} neighborhood={neighborhood} onMouseLeave={makeInactive}>
      <div className={`poi-indicator poi-${neighborhood.id}`} >
        {
          !isActive && 
          <div className="star-icon">
            <span className="material-icons-two-tone">
              star
            </span>
          </div>}
        {isActive && 
        <div className="poi-detail">
          <img src={neighborhood.mainImage} />
          <h5>{neighborhood.friendlyName}</h5>
        </div>
        }
      </div>
    </Link>
  )
}