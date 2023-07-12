import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calendar from './Components/Calendar';
import Alarm from './Components/Alarm';
import PostIt from './Components/PostIt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar/>
        <Alarm/>
        <PostIt/>
      </header>
    </div>
  );
}

export default App;
