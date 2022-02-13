import React from 'react'
import {Link} from 'react-router-dom'
import MiniIcon from './MiniIcon'

export default function Map({ neighborhoods, setActiveNeighborhood }) {
  
  return (
    <div className="main-body-container">
      <div className="map">
        
      {neighborhoods.map(neighborhood => {
        return (
          <MiniIcon
            neighborhood={neighborhood}
            setActiveNeighborhood={setActiveNeighborhood}
            key={neighborhood.id}
          />
        )
      })}
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}
