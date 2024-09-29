'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

type Archive = {
  id: number
  title: string
  date: string
  url: string
  desc: string
  type: 'VIDEO' | 'IMAGE' | 'PUBLICATION' | 'COMPOSTER' | 'EDITION'
}

export default function ArchivesCRUD() {
  const [archives, setArchives] = useState<Archive[]>([])
  const [newArchive, setNewArchive] = useState<Omit<Archive, 'id'>>({
    title: '',
    date: '',
    url: '',
    desc: '',
    type: 'VIDEO'
  })
  const [editingId, setEditingId] = useState<number | null>(null)

  useEffect(() => {
    fetchArchives()
  }, [])

  const fetchArchives = async () => {
    const response = await fetch('/api/archive')
    const data = await response.json()
    setArchives(data)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewArchive({ ...newArchive, [e.target.name]: e.target.value })
  }

  const handleTypeChange = (value: string) => {
    setNewArchive({ ...newArchive, type: value as Archive['type'] })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      await fetch('/api/archive', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newArchive, id: editingId })
      })
    } else {
      await fetch('/api/archive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArchive)
      })
    }
    setNewArchive({ title: '', date: '', url: '', desc: '', type: 'VIDEO' })
    setEditingId(null)
    fetchArchives()
  }

  const handleEdit = (archive: Archive) => {
    setNewArchive(archive)
    setEditingId(archive.id)
  }

  const handleDelete = async (id: number) => {
    await fetch(`/api/archive?id=${id}`, { method: 'DELETE' })
    fetchArchives()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Archives CRUD</h1>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <Input
          name="title"
          value={newArchive.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <Input
          name="date"
          type="date"
          value={newArchive.date}
          onChange={handleInputChange}
          required
        />
        <Input
          name="url"
          value={newArchive.url}
          onChange={handleInputChange}
          placeholder="URL"
          required
        />
        <Textarea
          name="desc"
          value={newArchive.desc}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <Select name="type" value={newArchive.type} onValueChange={handleTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="VIDEO">VIDEO</SelectItem>
            <SelectItem value="IMAGE">IMAGE</SelectItem>
            <SelectItem value="PUBLICATION">PUBLICATION</SelectItem>
            <SelectItem value="COMPOSTER">COMPOSTER</SelectItem>
            <SelectItem value="EDITION">EDITION</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">{editingId ? 'Update' : 'Add'} Archive</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {archives.map((archive) => (
            <TableRow key={archive.id}>
              <TableCell>{archive.title}</TableCell>
              <TableCell>{archive.date}</TableCell>
              <TableCell>{archive.url}</TableCell>
              <TableCell>{archive.desc}</TableCell>
              <TableCell>{archive.type}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => handleEdit(archive)} className="mr-2">
                  Edit
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(archive.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}