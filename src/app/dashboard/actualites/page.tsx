'use client';

import { useState, useEffect } from 'react';

interface Actualite {
  id: number;
  title: string;
  date: string;
  img: string;
}

export default function ActualitesPage() {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newImage, setNewImage] = useState<File | null>(null);
  const [editId, setEditId] = useState<number | null>(null);
  const [editImage, setEditImage] = useState<File | null>(null);

  useEffect(() => {
    fetchActualites();
  }, []);

  const fetchActualites = async () => {
    const response = await fetch('/api/actualites');
    const data = await response.json();
    setActualites(data);
  };
  console.log("Organisations", actualites);


  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newTitle);
    formData.append('date', newDate);
    if (newImage) {
      formData.append('img', newImage);
    }

    await fetch('/api/actualites', {
      method: 'POST',
      body: formData,
    });

    setNewTitle('');
    setNewDate('');
    setNewImage(null);
    fetchActualites();
  };

  const handleUpdate = async (id: number, updatedTitle: string, updatedDate: string) => {
    const formData = new FormData();
    formData.append('id', String(id));
    formData.append('title', updatedTitle);
    formData.append('date', updatedDate);
    if (editImage) {
      formData.append('img', editImage);
    }
    
    await fetch('/api/actualites', {
      method: 'PUT',
      body: formData,
    });
    
    setEditId(null);
    setEditImage(null);
    fetchActualites();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/actualites?id=${id}`, { method: 'DELETE' });
    fetchActualites();
  };


  console.log(actualites)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Actualités</h1>
      
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
          type="file"
          onChange={(e) => setNewImage(e.target.files ? e.target.files[0] : null)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Actualité
        </button>
      </form>

      <ul>
        {actualites.map((actualite) => (
          <li key={actualite.id} className="mb-2">
            <img src={`${actualite.img}`} alt={actualite.title} className="w-20 h-20 mr-2 inline" />
            {editId === actualite.id ? (
              <div className="inline">
                <input
                  type="text"
                  defaultValue={actualite.title}
                  onBlur={(e) => handleUpdate(actualite.id, e.target.value, actualite.date)}
                  className="border p-1 mr-2"
                />
                <input
                  type="date"
                  defaultValue={actualite.date}
                  onBlur={(e) => handleUpdate(actualite.id, actualite.title, e.target.value)}
                  className="border p-1 mr-2"
                />
                <input
                  type="file"
                  onChange={(e) => setEditImage(e.target.files ? e.target.files[0] : null)}
                  className="border p-1 mr-2"
                />
                <button
                  onClick={() => handleUpdate(actualite.id, actualite.title, actualite.date)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <span>{actualite.title} - {actualite.date}</span>
            )}
            <button
              onClick={() => setEditId(actualite.id)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(actualite.id)}
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