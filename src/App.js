import React from 'react';
import ToDoList from './ToDoList';
import NoteCard from './NoteCard';
import Taskbar from './Taskbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>My Creative To-Do List</h1>
      </header>
      <main>
        <div className="parallax"></div>
        <div className="content">
          <div className="todo-section">
            <ToDoList />
          </div>
          <div className="notes-section">
            <NoteCard />
          </div>
        </div>
      </main>
      <footer>
        <Taskbar />
      </footer>
    </div>
  );
};

export default App;
