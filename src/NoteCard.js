import React, { useState } from 'react';
import './NoteCard.css';

const NoteCard = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { text: newNote, date: new Date() }]);
      setNewNote('');
    }
  };

  return (
    <div className="note-card">
      <h2>Daily Notes</h2>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Add a new note"
      />
      <button onClick={addNote}>Add Note</button>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note">
            {note.text}
            <div className="note-details">
              <span>{note.date.toLocaleDateString()}</span>
              <span>{note.date.toLocaleTimeString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteCard;
