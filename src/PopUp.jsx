import React from 'react';
import {Link} from 'react-router-dom'

export default function PopUp({ neighborhoods, activeNeighborhood }) {
  console.log(neighborhoods);
  console.log(activeNeighborhood);

  const events = activeNeighborhood.events;
  const places = activeNeighborhood.featuredPlaces;
  
  return (
    <div className="pop-up">
      <h2>{activeNeighborhood.friendlyName}</h2>
      <p>{activeNeighborhood.blurb}</p>
      <h3>Exhibitions This Week</h3>
      <div className='exhibitions'>
        {
          events.map(event => {
            return (
              <div className="event">
                <img src='./images/design-district-1.png' />
                <p>
                  <a href={event.eventLink} target="_blank">
                    {event.eventName}
                  </a>
              </p>
              </div>
            )
          })
        }
      </div>
      <h4>Highlights</h4>
      <div className="places">
        {
          places.map(place => {
            return (
              <div className="place">
                <img src={place.placeImage} />
                <p>
                  <a href={place.placeLink} target="_blank">
                    {place.placeName}
                  </a>
              </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
