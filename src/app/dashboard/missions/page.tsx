'use client';

import { useState, useEffect } from 'react';

interface Mission {
  id: number;
  label: string;
}

export default function MissionPage() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [newLabel, setNewLabel] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    fetchMissions();
  }, []);


  const fetchMissions = async () => {
    const response = await fetch('/api/missions');
    const data = await response.json();
    setMissions(data);
    console.log(missions)
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/missions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ label: newLabel })
    });
    setNewLabel('');
    fetchMissions();
  };

  const handleUpdate = async (id: number, newLabel: string) => {
    await fetch('/api/missions', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, label: newLabel })
    });
    setEditId(null);
    fetchMissions();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/missions?id=${id}`, { method: 'DELETE' });
    fetchMissions();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Missions</h1>
      
      <form onSubmit={handleCreate} className="mb-4">
        <input
          type="text"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          className="border p-2 mr-2"
          placeholder="New mission label"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Mission
        </button>
      </form>

      <ul>
        {missions.map((mission) => (
          <li key={mission.id} className="mb-2">
            {editId === mission.id ? (
              <input
                type="text"
                defaultValue={mission.label}
                onBlur={(e) => handleUpdate(mission.id, e.target.value)}
                className="border p-1 mr-2"
              />
            ) : (
              <span>{mission.label}</span>
            )}
            <button
              onClick={() => setEditId(mission.id)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(mission.id)}
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