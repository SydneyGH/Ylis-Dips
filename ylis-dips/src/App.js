import React from 'react';
import HomeLogo from './components/homeLogo/homeLogo';
import HomeNavbar from './components/homeNavBar/homeNav';
import './index.css';

function App() {
  return (
  <div>
    <div className="content">
    <HomeLogo/>
    <HomeNavbar/>
    </div>
  </div>
  );
}

export default App;
