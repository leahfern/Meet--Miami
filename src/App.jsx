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
        eventImage: 'https://lh3.googleusercontent.com/pw/AM-JKLVqtNNSQj9h329CWyHde_4sort5OKHoo5dgxIlMUzkoZrZcFx1DPZJjSuGAIhyNFiyuTqcVC83RK_8OGxxYyibsY8FP3v5vMWrMX1553xSQ7Gsz7lEMf5hgrd9hCU9juwHWg-JSGJNt-tlykxZOEw_m=w485-h476-no?authuser=0',
        eventLink: 'https://markowiczfineart.com/'
      },
      {
        eventID: 2,
        eventName: 'Swampspace',
        eventImage: 'https://lh3.googleusercontent.com/pw/AM-JKLVf4tJ6DeYwPE5XzqMh13IShVh32uNK3z1sepfh0izoSDhn-5LhOQyJhA4rJTxmKXEK7FzJEWe3iL3tWd9W8fOPjeOwuHRYu0Ijn4qjH2tNRETe9XKkD_4aLxm_wQn4dKSc4hi7AR9w1Z8GL2Ebaknb=w1019-h943-no?authuser=0',
        eventLink: 'https://www.miamidesigndistrict.net/listing/281/swampspace/'
      },
      {
        eventID: 3,
        eventName: 'Opera Gallery',
        eventImage: 'https://lh3.googleusercontent.com/pw/AM-JKLX2v9DpF7OsHWA0EX_DfnP4Wg65FpL75UIGsq7H6YxDNFzncplzGXtwdyKXWP7kV_-BRplBqIoMbODWSdhQYuMfTgLgh96Zjh51yDvQy-u3vzV5wHazjuUueuXQGhpp0OtM3yG2KOlkKQk4XB4iiNwg=s443-no?authuser=0',
        eventLink: "https://www.operagallery.com/contact/miami"
      },
      {
        eventID: 4,
        eventName: 'De La Cruz Collection',
        eventImage: 'https://lh3.googleusercontent.com/pw/AM-JKLV7kghc8LWh6CeWCL7XLhVLTtH5NHevmCbbKC0FDrehfAgNcYwB-sZWWuAGo__Jp71W3Gtj8UHhCFY_sjyLiDVOz9hLQ4m1Pn0SH1_JeGXw9jxH6I3iRkb06J0BaLK3JxnOiDlqs6cSB4-9HCBiddZg=s894-no?authuser=0',
        eventLink: 'https://www.delacruzcollection.org/'
      },
      {
        eventID: 5,
        eventName: 'Black Tower Gallery',
        eventImage: 'https://lh3.googleusercontent.com/pw/AM-JKLXTzxuHKuIH1i0o5c1JunLAl1TYZ7tuTibMz18t8bEJX2sUyU3seRO7HHvrzOBF-_mcnIVzQy88-DfAisCeXLEza3PnisfEpWcersDg_muJ7GAPH28i2ho_16uaZtzJ9kg7cfOtrIAm6ptzvIIqzxXD=s692-no?authuser=0',
        eventLink: 'https://www.blacktowergallery.com/'
      },
      
    ],
    featuredPlaces: [
      {
        placeID: 1,
        placeName: 'Institute of Contemporary Art',
        placeImage: 'https://lh3.googleusercontent.com/pw/AM-JKLXn0Mupx3dvyY11zD6EwotWts8rS7XueSXTgdQ_SYgh8s258dPjIXp_tMbjINN6EuwGzgkUbEOjvfekh4z_QRX040wsv1JiazbAmOUGsfG_WzkRl9FG5y4u6VyvXW0oXvB5vV4aFLjW8AMVWeMh6KdF=s887-no?authuser=0',
        placeLink: 'https://icamiami.org/'
      },
      {
        placeID: 2,
        placeName: 'Fly\'s Eye Dome',
        placeImage: 'https://lh3.googleusercontent.com/pw/AM-JKLWv0dVYdbz7pzr0BmUZum1GrEIJCIQW6MC7VDlISTo3ZXJwwFUZdecyzcYvOuVBssC9G8ElhkEDLQr_U1xqvvV9WyvQ8i6gQHgzFGkMftYieAfqFyCsvLWjEF2TCoqXKRxC7JfYy4Yfqy2HgSqz1NrG=s354-no?authuser=0',
        placeLink: 'https://www.miamidesigndistrict.net/listing/395/buckminster-fuller-flys-eye-dome-1979802014/'
      },
      {
        placeID: 3,
        placeName: 'The Arsenale',
        placeImage: 'https://lh3.googleusercontent.com/pw/AM-JKLUnS6mL7ubwshjY0WzdgrewEICekp26Wdhjx2M64rjhF5wObspxWI4eJEowH54QqCcQY6F-2eFelTb-VezBiIZjRsVaUofdYW3HQQ25fO-MYa4av9I-ib1bc3TwQdgnLBFLQKvpvu4YfXEoeyUOor6x=s600-no?authuser=0',
        placeLink: 'https://thearsenale.com/'
      },
      {
        placeID: 4,
        placeName: 'The Garage',
        placeImage: 'https://lh3.googleusercontent.com/pw/AM-JKLUwhHexJSDU6chRr8fb4xhrrViVYv_kqgB6QHaL5HGdqedsc_uN98pohC7smC5FruSbH4uksCjP6A1QAlpfU5UMiP29EOMLUhI_7MQji7O1FxW2A1Rjbbg9Fn8twvL_CnxQFuIStcNhdZecoI4xZUit=s888-no?authuser=0',
        placeLink: 'https://www.miamidesigndistrict.net/listing/739/museum-garage/'
      },
      {
        placeID: 5,
        placeName: 'Haitian Heritage Museum',
        placeImage: 'https://lh3.googleusercontent.com/pw/AM-JKLWK-4Ng5YR9Ymoh8PK8r7TsVyFveuHZHTfWI1H_u_Tp_W68mYtHy-2GBnh8-Hbzn3XKUg10EXbrNzASeumQw08DC7AELjGS4-Hy1DvyoX1AmUHvdy18Y-sodPK-IJDbZpCMKKLmTb5__J44RLbJDN3r=s419-no?authuser=0',
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