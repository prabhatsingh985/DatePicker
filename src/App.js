import React, { useState } from 'react';
import './App.css';
import DatePicker from './DatePicker.jsx';

function App() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateSubmit = (day, month, year) => {
    setSelectedDate(`${month}/${day}/${year}`);
    setShowDatePicker(false);
  };

  return (
    <div className="app-container">
      <button onClick={handleButtonClick}>Select date</button>
      {showDatePicker && <DatePicker onSubmit={handleDateSubmit} />}
      <input
        type="text"
        value={selectedDate}
        readOnly
        placeholder="Selected date will appear here"
      />
    </div>
  );
}

export default App;
