"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye } from "lucide-react"

interface Archive {
  id: number
  title: string | null
  date: string | null
  url: string | null
  desc: string | null
  type: string | null
}

interface PublicationProps {
  publications: Archive[]
}

const Publications: React.FC<PublicationProps> = ({ publications }) => {
  const isImage = (url: string | null) => {
    if (!url) return false
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Composter Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((publication) => (
          <Card key={publication.id} className="overflow-hidden">
            <CardContent className="p-0">
              {publication.url && isImage(publication.url) ? (
                <div className="relative aspect-square">
                  <Image
                    src={publication.url}
                    alt={publication.title || "Poster image"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              ) : (
                <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
                  <FileText size={64} className="text-gray-400" />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">{publication.title}</h2>
                {publication.date && (
                  <p className="text-sm text-gray-500 mb-2">{publication.date}</p>
                )}
                {publication.desc && (
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">{publication.desc}</p>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 capitalize">{publication.type || "Unknown type"}</span>
                  {publication.url && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(publication.url!, '_blank')}
                    >
                      {isImage(publication.url) ? (
                        <Eye className="mr-2 h-4 w-4" />
                      ) : (
                        <Download className="mr-2 h-4 w-4" />
                      )}
                      {isImage(publication.url) ? 'View' : 'Download'}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Publications