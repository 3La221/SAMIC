'use client';

import { useState, useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  desc: string;
}

export default function EventPage() { 

  const [events, setEvents] = useState<Event[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newStartDate, setNewStartDate] = useState('');
  const [newEndDate, setNewEndDate] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await fetch('/api/events');
    const data = await response.json();
    setEvents(data);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, startDate: newStartDate, endDate: newEndDate, desc: newDesc })
    });
    setNewTitle('');
    setNewStartDate('');
    setNewEndDate('');
    setNewDesc('');
    fetchEvents();
  };

  const handleUpdate = async (id: number, updatedTitle: string, updatedStartDate: string, updatedEndDate: string, updatedDesc: string) => {
    await fetch('/api/events', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title: updatedTitle, startDate: updatedStartDate, endDate: updatedEndDate, desc: updatedDesc })
    });
    setEditId(null);
    fetchEvents();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/events?id=${id}`, { method: 'DELETE' });
    fetchEvents();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Événements</h1>
      
      <form onSubmit={handleCreate} className="mb-4">
        <label className="block mb-1">Titre:</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Titre"
        />
        
        <label className="block mb-1">Date de début:</label>
        <input
          type="date"
          value={newStartDate}
          onChange={(e) => setNewStartDate(e.target.value)}
          className="border p-2 mr-2"
        />
        
        <label className="block mb-1">Date de fin:</label>
        <input
          type="date"
          value={newEndDate}
          onChange={(e) => setNewEndDate(e.target.value)}
          className="border p-2 mr-2"
        />
        
        <label className="block mb-1">Description:</label>
        <input
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Description"
        />
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Ajouter Événement
        </button>
      </form>

      <ul>
        {events.map((event) => (
          <li key={event.id} className="mb-2">
            {editId === event.id ? (
              <div>
                <input
                  type="text"
                  defaultValue={event.title}
                  onBlur={(e) => handleUpdate(event.id, e.target.value, event.startDate, event.endDate, event.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="date"
                  defaultValue={event.startDate}
                  onBlur={(e) => handleUpdate(event.id, event.title, e.target.value, event.endDate, event.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="date"
                  defaultValue={event.endDate}
                  onBlur={(e) => handleUpdate(event.id, event.title, event.startDate, e.target.value, event.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="text"
                  defaultValue={event.desc}
                  onBlur={(e) => handleUpdate(event.id, event.title, event.startDate, event.endDate, e.target.value)}
                  className="border p-1 mr-2"
                />
              </div>
            ) : (
              <span>{event.title} - {event.startDate} à {event.endDate} - {event.desc}</span>
            )}
            <button
              onClick={() => setEditId(event.id)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Modifier
            </button>
            <button
              onClick={() => handleDelete(event.id)}
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
