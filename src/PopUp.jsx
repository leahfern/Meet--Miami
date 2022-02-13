import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PopUp({ neighborhoods, activeNeighborhood }) {
  console.log(activeNeighborhood);

  const events = activeNeighborhood.events;
  const places = activeNeighborhood.featuredPlaces;

  const navigate = useNavigate();
  
  return (
    <div className="main-body-container">
      <div className="material-icons back-button" onClick={() => navigate(-1)}>arrow_back</div>
      <h1 className="popUp-title">Miami</h1>
      <div className="popUp-main">
        <h2>{activeNeighborhood.friendlyName}</h2>
        <p>{activeNeighborhood.blurb}</p>
        <h3>Exhibitions This Week</h3>
        <div className='events'>
          {
            events.map(event => {
              console.log(event)
              return (
                <div className="event" key={event.eventID}>
                  <img src={event.eventImage} />
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
        <h3>Highlights</h3>
        <div className="places">
          {
            places.map(place => {
              console.log(place)
              return (
                <div className="place" key={place.placeID}>
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
    </div>
  )
}
