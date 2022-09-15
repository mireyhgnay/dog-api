import React from 'react';
import './App.css';
import DogImage from './components/DogImage';
import DogSelect from './components/DogSelect';

function App() {
  return (
    <div>
      <DogSelect />
      <DogImage />
    </div>
  );
}

export default App;
