'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Congres {
  id: number;
  title: string;
  url: string;
}

export default function CongresPage() {
  const [congres, setCongres] = useState<Congres[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editUrl, setEditUrl] = useState('');

  useEffect(() => {
    fetchCongres();
  }, []);

  const fetchCongres = async () => {
    const response = await fetch('/api/congres');
    const data = await response.json();
    console.log(data)
    setCongres(data);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/congres', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, url: newUrl })
    });
    setNewTitle('');
    setNewUrl('');
    fetchCongres();
  };

  const handleUpdate = async (id: number) => {
    await fetch('/api/congres', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title: editTitle, url: editUrl })
    });
    setEditId(null);
    fetchCongres();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/congres?id=${id}`, { method: 'DELETE' });
    fetchCongres();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Congrès</h1>
      
      <form onSubmit={handleCreate} className="mb-4 space-y-4">
        <Input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Titre du congrès"
          className="w-full"
        />
        <Input
          type="url"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          placeholder="URL du congrès"
          className="w-full"
        />
        <Button type="submit" className="w-full">
          Ajouter Congrès
        </Button>
      </form>

      <ul className="space-y-4">
        {congres.map((congress) => (
          <li key={congress.id} className="bg-white shadow rounded-lg p-4">
            {editId === congress.id ? (
              <div className="space-y-2">
                <Input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full"
                />
                <Input
                  type="url"
                  value={editUrl}
                  onChange={(e) => setEditUrl(e.target.value)}
                  className="w-full"
                />
                <div className="flex justify-end space-x-2">
                  <Button onClick={() => handleUpdate(congress.id)} variant="outline">
                    Sauvegarder
                  </Button>
                  <Button onClick={() => setEditId(null)} variant="ghost">
                    Annuler
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold">{congress.title}</h2>
                <a href={congress.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {congress.url}
                </a>
                <div className="mt-2 flex justify-end space-x-2">
                  <Button
                    onClick={() => {
                      setEditId(congress.id);
                      setEditTitle(congress.title);
                      setEditUrl(congress.url);
                    }}
                    variant="outline"
                  >
                    Modifier
                  </Button>
                  <Button
                    onClick={() => handleDelete(congress.id)}
                    variant="destructive"
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}