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
  const [newTitle, setNewTitle] = useState<string>('');
  const [newStartDate, setNewStartDate] = useState<string>('');
  const [newEndDate, setNewEndDate] = useState<string>('');
  const [newDesc, setNewDesc] = useState<string>('');
  const [editId, setEditId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFormations();
  }, []);

  const fetchFormations = async () => {
    try {
      const response = await fetch('/api/formations');
      if (!response.ok) throw new Error('Failed to fetch formations');
      const data = await response.json();
      setFormations(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/formations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, startDate: newStartDate, endDate: newEndDate, desc: newDesc }),
      });
      if (!response.ok) throw new Error('Failed to create formation');
      setNewTitle('');
      setNewStartDate('');
      setNewEndDate('');
      setNewDesc('');
      fetchFormations();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleUpdate = async (id: number, updatedFormation: Formation) => {
    try {
      const response = await fetch('/api/formations', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFormation),
      });
      if (!response.ok) throw new Error('Failed to update formation');
      setEditId(null);
      fetchFormations();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/formations?id=${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete formation');
      fetchFormations();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Formations</h1>
      {error && <div className="text-red-500">{error}</div>}

      <form onSubmit={handleCreate} className="mb-4">
        <div className="mb-2">
          <label className="block mb-1" htmlFor="title">Titre::</label>
          <input
            type="text"
            id="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-2 w-full"
            placeholder="Titre"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1" htmlFor="startDate">Date de début:  </label>
          <input
            type="date"
            id="startDate"
            value={newStartDate}
            onChange={(e) => setNewStartDate(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1" htmlFor="endDate">Date de fin:</label>
          <input
            type="date"
            id="endDate"
            value={newEndDate}
            onChange={(e) => setNewEndDate(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1" htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            className="border p-2 w-full"
            placeholder="Description"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Formation
        </button>
      </form>

      <ul>
        {formations.map((formation) => (
          <li key={formation.id} className="mb-2 flex items-center">
            {editId === formation.id ? (
              <div className="flex space-x-2">
                <div className="mb-2">
                  <label className="block mb-1" htmlFor={`edit-title-${formation.id}`}>Title:</label>
                  <input
                    type="text"
                    id={`edit-title-${formation.id}`}
                    defaultValue={formation.title}
                    onBlur={(e) => handleUpdate(formation.id, { ...formation, title: e.target.value })}
                    className="border p-1"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1" htmlFor={`edit-startDate-${formation.id}`}>Start Date:</label>
                  <input
                    type="date"
                    id={`edit-startDate-${formation.id}`}
                    defaultValue={formation.startDate}
                    onBlur={(e) => handleUpdate(formation.id, { ...formation, startDate: e.target.value })}
                    className="border p-1"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1" htmlFor={`edit-endDate-${formation.id}`}>End Date:</label>
                  <input
                    type="date"
                    id={`edit-endDate-${formation.id}`}
                    defaultValue={formation.endDate}
                    onBlur={(e) => handleUpdate(formation.id, { ...formation, endDate: e.target.value })}
                    className="border p-1"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1" htmlFor={`edit-description-${formation.id}`}>Description:</label>
                  <input
                    type="text"
                    id={`edit-description-${formation.id}`}
                    defaultValue={formation.desc}
                    onBlur={(e) => handleUpdate(formation.id, { ...formation, desc: e.target.value })}
                    className="border p-1"
                  />
                </div>
              </div>
            ) : (
              <span className="flex-grow">{formation.title} - {formation.startDate} to {formation.endDate} - {formation.desc}</span>
            )}
            <button
              onClick={() => setEditId(formation.id)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Modifier
            </button>
            <button
              onClick={() => handleDelete(formation.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
