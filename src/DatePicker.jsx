import React, { useState } from 'react';
import DayPicker from './DayPicker';
import MonthPicker from './MonthPicker';
import YearPicker from './YearPicker';
import './DatePicker.css';

const DatePicker = ({ onSubmit })  => {
  const [selectedDay, setSelectedDay] = useState(15);
  const [selectedMonth, setSelectedMonth] = useState(2);
  const [selectedYear, setSelectedYear] = useState(2000);
  const handleSubmit = () => {
    onSubmit(selectedDay, selectedMonth, selectedYear);
  };
  return (
    <div className="date-picker">
      <DayPicker selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <MonthPicker selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <YearPicker selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      <button onClick={handleSubmit} >submit</button>
    </div>
  );
};

export default DatePicker;
