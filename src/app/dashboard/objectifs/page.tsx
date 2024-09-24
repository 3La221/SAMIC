'use client';

import { useState, useEffect } from 'react';

interface Objectif {
  id: number;
  label: string;
}

export default function ObjectifsPage() {
  const [objectifs, setObjectifs] = useState<Objectif[]>([]);
  const [newLabel, setNewLabel] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    fetchObjectifs();
  }, []);

  const fetchObjectifs = async () => {
    const response = await fetch('/api/objectifs');
    const data = await response.json();
    setObjectifs(data);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/objectifs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ label: newLabel })
    });
    setNewLabel('');
    fetchObjectifs();
  };

  const handleUpdate = async (id: number, newLabel: string) => {
    await fetch('/api/objectifs', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, label: newLabel })
    });
    setEditId(null);
    fetchObjectifs();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/objectifs?id=${id}`, { method: 'DELETE' });
    fetchObjectifs();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Objectifs</h1>
      
      <form onSubmit={handleCreate} className="mb-4">
        <input
          type="text"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          className="border p-2 mr-2"
          placeholder="New objectif label"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Objectif
        </button>
      </form>

      <ul>
        {objectifs.map((objectif) => (
          <li key={objectif.id} className="mb-2">
            {editId === objectif.id ? (
              <input
                type="text"
                defaultValue={objectif.label}
                onBlur={(e) => handleUpdate(objectif.id, e.target.value)}
                className="border p-1 mr-2"
              />
            ) : (
              <span>{objectif.label}</span>
            )}
            <button
              onClick={() => setEditId(objectif.id)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(objectif.id)}
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