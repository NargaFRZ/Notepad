import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:3000/notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Notepad</h1>
      <NoteForm fetchNotes={fetchNotes} />
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {notes.map(note => (
          <Note key={note.id} note={note} fetchNotes={fetchNotes} />
        ))}
      </div>
    </div>
  );
};

export default App;
