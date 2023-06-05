import React from 'react';
import './App.scss';
import Profile from './components/Profile';
import Countdown from './components/Countdown';
import Address from './components/Address';
import ShareButtons from './components/ShareButtons';
import { brideData } from './data/brideData';
import { groomData } from './data/groomData';
import { addressData } from './data/addressData';

const App = () => {
    return (
      <div className="wedding-card">
          <div className="app">
            <div className="profile-section">
              <Profile data={brideData} />
              <div className="profile-line"></div>
              <Profile data={groomData} />
            </div>
            <Countdown />
            <Address  />
            <ShareButtons />
            
          </div>
      </div>
    );
  };
export default App;
