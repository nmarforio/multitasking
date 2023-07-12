import logo from './logo.svg';
import './App.css';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import Calendar from './Components/Calendar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar/>
      </header>
    </div>
  );
}

export default App;
