import './App.css';
import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import TopBar from './TopBar';
import Background from './Background';
import Listings from './Listings';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      <Listings/>
    </div>
  );
}

export default App;
