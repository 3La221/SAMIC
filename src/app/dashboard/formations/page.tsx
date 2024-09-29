'use client';

import { useState, useEffect } from 'react';

interface Formation {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  desc: string;
}

export default function FormationPage() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newStartDate, setNewStartDate] = useState('');
  const [newEndDate, setNewEndDate] = useState('');
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
      body: JSON.stringify({ title: newTitle, startDate: newStartDate, endDate: newEndDate, desc: newDesc })
    });
    setNewTitle('');
    setNewStartDate('');
    setNewEndDate('');
    setNewDesc('');
    fetchFormations();
  };

  const handleUpdate = async (id: number, updatedTitle: string, updatedStartDate: string, updatedEndDate: string, updatedDesc: string) => {
    await fetch('/api/formations', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title: updatedTitle, startDate: updatedStartDate, endDate: updatedEndDate, desc: updatedDesc })
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
          value={newStartDate}
          onChange={(e) => setNewStartDate(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Start Date"
        />
        <input
          type="date"
          value={newEndDate}
          onChange={(e) => setNewEndDate(e.target.value)}
          className="border p-2 mr-2"
          placeholder="End Date"
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
                  onBlur={(e) => handleUpdate(formation.id, e.target.value, formation.startDate, formation.endDate, formation.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="date"
                  defaultValue={formation.startDate}
                  onBlur={(e) => handleUpdate(formation.id, formation.title, e.target.value, formation.endDate, formation.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="date"
                  defaultValue={formation.endDate}
                  onBlur={(e) => handleUpdate(formation.id, formation.title, formation.startDate, e.target.value, formation.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="text"
                  defaultValue={formation.desc}
                  onBlur={(e) => handleUpdate(formation.id, formation.title, formation.startDate, formation.endDate, e.target.value)}
                  className="border p-1 mr-2"
                />
              </div>
            ) : (
              <span>{formation.title} - {formation.startDate} to {formation.endDate} - {formation.desc}</span>
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
