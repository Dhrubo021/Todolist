import React from 'react';
import './Taskbar.css';

const Taskbar = () => {
  return (
    <div className="taskbar">
      <div className="time">
        {new Date().toLocaleTimeString()}
      </div>
      <div className="date">
        {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default Taskbar;
