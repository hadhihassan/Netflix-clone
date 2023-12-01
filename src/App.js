import React from 'react';
import './App.css';
import NavBar from './Componenet/NavBar/NavBar';
import Banner from './Componenet/Banner/Banner';
import RowPost from './Componenet/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost />
    </div>
  );
}

export default App;
