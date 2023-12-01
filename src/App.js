import React from 'react';
import './App.css';
import NavBar from './Componenet/NavBar/NavBar';
import Banner from './Componenet/Banner/Banner';
import RowPost from './Componenet/RowPost/RowPost';
import {orginals,action} from './constants/urls'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title={"Netflix Orginals"}/>
      <RowPost url={action}title={"Actions"} isSmall />
    </div>
  );
} 

export default App;
