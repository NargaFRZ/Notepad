import React, { useState } from 'react';

const Note = ({ note, fetchNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const updateNote = async () => {
    try {
      const response = await fetch(`http://localhost:3000/notes/${note.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
      if (response.ok) {
        fetchNotes();
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const deleteNote = async () => {
    try {
      const response = await fetch(`http://localhost:3000/notes/${note.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchNotes();
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      {isEditing ? (
        <div>
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <button
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={updateNote}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-2">{note.title}</h2>
          <p className="mb-4 text-gray-700">{note.content}</p>
          <div className="flex space-x-4">
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={deleteNote}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
