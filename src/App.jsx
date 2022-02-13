import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import PopUp from './PopUp';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';

const neighborhoodsArr = [
  {
    id: 1,
    name: 'downtown',
    friendlyName: 'Downtown & Brickell',
    mainImage: 'https://s14.therealdeal.com/trd/m/up/2016/11/SLS-Mural.jpg',
    blurb: '',
    placeLink: 'https://www.google.com',
    events: [
      {
        eventID: 1,
        eventName: 'testEvent',
        eventImage: 'nameOfImage',
        eventLink: 'https://www.google.com'
      }
    ],
    featuredPlaces: [
      {
        placeID: 1,
        placeName: 'Museum 1',
        placeImage: '',
        placeLink: 'https://www.google.com'
      }
    ]
  },
  {
    id: 2,
    name: 'design',
    friendlyName: 'Design District',
    mainImage: 'https://images.miamiandbeaches.com/getmedia/db34508b-4c30-4326-9cbf-ac53c7cd6128/Design-District-Flys-Eye-Dome-1440x900.aspx?ext=.jpg',
    blurb: 'Historically a part of Buena Vista, the Design District is located south of Lemon City (Little Haiti). It is roughly bound by North 36 St (US 27) to the south, North 43rd Street to the north, West First Avenue to the west and Biscayne Boulevard to the east.',
    placeLink: 'https://www.google.com',
    events: [
      {
        eventID: 1,
        eventName: 'Markowicz Gallery',
        eventImage: './images/design-district-1',
        eventLink: 'https://markowiczfineart.com/'
      },
      {
        eventID: 2,
        eventName: 'Swampspace',
        eventImage: './images/design-district-1',
        eventLink: 'https://www.miamidesigndistrict.net/listing/281/swampspace/'
      },
      {
        eventID: 3,
        eventName: 'Opera Gallery',
        eventImage: './images/design-district-3',
        eventLink: 'https://www.operagallery.com/contact/miami'
      },
      {
        eventID: 4,
        eventName: 'De La Cruz Collection',
        eventImage: './images/design-district-11',
        eventLink: 'https://www.delacruzcollection.org/'
      },
      {
        eventID: 5,
        eventName: 'Black Tower Gallery',
        eventImage: './images/design-district-4',
        eventLink: 'https://www.blacktowergallery.com/'
      },
      
    ],
    featuredPlaces: [
      {
        placeID: 1,
        placeName: 'Institute of Contemporary Art',
        placeImage: './images/design-district-5',
        placeLink: 'https://icamiami.org/'
      },
      {
        placeID: 2,
        placeName: 'Fly\'s Eye Dome',
        placeImage: './images/design-district-6',
        placeLink: 'https://www.miamidesigndistrict.net/listing/395/buckminster-fuller-flys-eye-dome-1979802014/'
      },
      {
        placeID: 3,
        placeName: 'The Arsenale',
        placeImage: './images/design-district-12',
        placeLink: 'https://thearsenale.com/'
      },
      {
        placeID: 4,
        placeName: 'The Garage',
        placeImage: './images/design-district-7',
        placeLink: 'https://www.miamidesigndistrict.net/listing/739/museum-garage/'
      },
      {
        placeID: 5,
        placeName: 'Haitian Heritage Museum',
        placeImage: './images/design-district-13',
        placeLink: 'http://www.haitianheritagemuseum.org/'
      },
    ]
  },
]

function App() {
  const [neighborhoods, setNeighborhoods] = useState(neighborhoodsArr);
  const [activeNeighborhood, setActiveNeighborhood] = useState({});
  
  return (
    <div className="main">
      <div className="content">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/map" element={<Map neighborhoods={neighborhoods} setActiveNeighborhood={setActiveNeighborhood}/>} />
          <Route path="/popup" element={<PopUp neighborhoods={neighborhoods} activeNeighborhood={activeNeighborhood}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;