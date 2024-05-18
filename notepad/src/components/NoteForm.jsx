import React, { useState } from 'react';

const NoteForm = ({ fetchNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = async () => {
    try {
      const response = await fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
      if (response.ok) {
        fetchNotes();
        setTitle('');
        setContent('');
      }
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Add a new note</h2>
      <input
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={addNote}
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteForm;
