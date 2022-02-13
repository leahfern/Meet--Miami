import React from 'react'
import {Link} from 'react-router-dom'
import MiniIcon from './MiniIcon';
import { useNavigate } from 'react-router-dom';


export default function Map({ neighborhoods, setActiveNeighborhood }) {

  const navigate = useNavigate();
  
  return (
    <div className="main-body-container">
      <div className="material-icons back-button" onClick={() => navigate(-1)}>arrow_back</div>
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
    </div>
  )
}
