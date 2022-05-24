import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SchedulingCalendar from './pages/SchedulingCalendar';
import Confirm from './pages/Confirm';
import Bookings from './pages/Bookings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SchedulingCalendar />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="*" element={<p>Error: Page Not Found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
