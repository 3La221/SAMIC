'use client';

import { useState, useEffect } from 'react';

interface Formation {
  id: number;
  title: string;
  date: string;
  desc: string;
}

export default function FormationPage() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    fetchFormations();
  }, []);

  const fetchFormations = async () => {
    const response = await fetch('/api/formations');
    const data = await response.json();
    setFormations(data);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/formations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, date: newDate, desc: newDesc })
    });
    setNewTitle('');
    setNewDate('');
    setNewDesc('');
    fetchFormations();
  };

  const handleUpdate = async (id: number, updatedTitle: string, updatedDate: string, updatedDesc: string) => {
    await fetch('/api/formations', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title: updatedTitle, date: updatedDate, desc: updatedDesc })
    });
    setEditId(null);
    fetchFormations();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/formations?id=${id}`, { method: 'DELETE' });
    fetchFormations();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Formations</h1>
      
      <form onSubmit={handleCreate} className="mb-4">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Title"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Date"
        />
        <input
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Description"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Formation
        </button>
      </form>

      <ul>
        {formations.map((formation) => (
          <li key={formation.id} className="mb-2">
            {editId === formation.id ? (
              <div>
                <input
                  type="text"
                  defaultValue={formation.title}
                  onBlur={(e) => handleUpdate(formation.id, e.target.value, formation.date, formation.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="date"
                  defaultValue={formation.date}
                  onBlur={(e) => handleUpdate(formation.id, formation.title, e.target.value, formation.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="text"
                  defaultValue={formation.desc}
                  onBlur={(e) => handleUpdate(formation.id, formation.title, formation.date, e.target.value)}
                  className="border p-1 mr-2"
                />
              </div>
            ) : (
              <span>{formation.title} - {formation.date} - {formation.desc}</span>
            )}
            <button
              onClick={() => setEditId(formation.id)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(formation.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
