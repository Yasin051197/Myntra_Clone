import { useState } from 'react';
import './App.css';
import Middle from './components/Middle';
import Navbar from './components/Navbar';
import Sliderdata from './Data/SliderData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sliderdata />
      <Middle />
    </div>
  );
}

export default App;
