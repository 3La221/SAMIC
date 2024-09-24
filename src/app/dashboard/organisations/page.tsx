'use client';

import { useState, useEffect } from 'react';

interface Organisation {
  id: number;
  title: string;
  desc: string;
  img: string;
}

export default function OrganisationPage() {
  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newImage, setNewImage] = useState<File | null>(null);
  const [editId, setEditId] = useState<number | null>(null);
  const [editImage, setEditImage] = useState<File | null>(null);

  useEffect(() => {
    fetchorganisations();
  }, []);

  const fetchorganisations = async () => {
    const response = await fetch('/api/organisations');
    const data = await response.json();
    setOrganisations(data);
  };

  const handleCreate = async (e: React.FormEvent) => {
    console.log("Data", newTitle, newDesc, newImage);
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newTitle);
    formData.append('desc', newDesc);
    if (newImage) {
      formData.append('img', newImage);
    }

    await fetch('/api/organisations', {
      method: 'POST',
      body: formData
    });

    setNewTitle('');
    setNewDesc('');
    setNewImage(null);
    fetchorganisations();
    
  };

  const handleUpdate = async (id: number, updatedTitle: string, updateDesc: string) => {
    const formData = new FormData();
    formData.append('id', String(id));
    formData.append('title', updatedTitle);
    formData.append('date', updateDesc);
    if (editImage) {
      formData.append('img', editImage);
    }
    
    await fetch('/api/organisations', {
      method: 'PUT',
      body: formData
    });
    
    setEditId(null);
    setEditImage(null);
    fetchorganisations();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/organisations?id=${id}`, { method: 'DELETE' });
    fetchorganisations();
  };



  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Organisation</h1>
      
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
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Description"
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
        {organisations.map((organisation) => (
          <li key={organisation.id} className="mb-2">
            <img src={`${organisation.img}`} alt={organisation.title} className="w-20 h-20 mr-2 inline" />
            {editId === organisation.id ? (
              <div className="inline">
                <input
                  type="text"
                  defaultValue={organisation.title}
                  onBlur={(e) => handleUpdate(organisation.id, e.target.value, organisation.desc)}
                  className="border p-1 mr-2"
                />
                <input
                  type="text"
                  defaultValue={organisation.desc}
                  onBlur={(e) => handleUpdate(organisation.id, organisation.title, e.target.value)}
                  className="border p-1 mr-2"
                />
                <input
                  type="file"
                  onChange={(e) => setEditImage(e.target.files ? e.target.files[0] : null)}
                  className="border p-1 mr-2"
                />
                <button
                  onClick={() => handleUpdate(organisation.id, organisation.title, organisation.desc)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <span>{organisation.title} - {organisation.desc}</span>
            )}
            <button
              onClick={() => setEditId(organisation.id)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(organisation.id)}
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