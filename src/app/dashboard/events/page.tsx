'use client';

import { useState, useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  desc: string;
}

export default function EventPage() { 

  const [events, setEvents] = useState<Event[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
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
      body: JSON.stringify({ title: newTitle, date: newDate, desc: newDesc })
    });
    setNewTitle('');
    setNewDate('');
    setNewDesc('');
    fetchEvents();
  };

  const handleUpdate = async (id: number, updatedTitle: string, updatedDate: string, updatedDesc: string) => {
    await fetch('/api/events', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title: updatedTitle, date: updatedDate, desc: updatedDesc })
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
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      
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
          Add Event
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
                  onBlur={(e) => handleUpdate(event.id, e.target.value, event.date, event.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="date"
                  defaultValue={event.date}
                  onBlur={(e) => handleUpdate(event.id, event.title, e.target.value, event.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="text"
                  defaultValue={event.desc}
                  onBlur={(e) => handleUpdate(event.id, event.title, event.date, e.target.value)}
                  className="border p-1 mr-2"
                />
              </div>
            ) : (
              <span>{event.title} - {event.date} - {event.desc}</span>
            )}
            <button
              onClick={() => setEditId(event.id)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(event.id)}
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
