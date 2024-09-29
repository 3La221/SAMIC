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

interface ComPostersProps {
  posters: Archive[]
}

const ComPosters: React.FC<ComPostersProps> = ({ posters }) => {
  const isImage = (url: string | null) => {
    if (!url) return false
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Composter Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posters.map((poster) => (
          <Card key={poster.id} className="overflow-hidden">
            <CardContent className="p-0">
              {poster.url && isImage(poster.url) ? (
                <div className="relative aspect-square">
                  <Image
                    src={poster.url}
                    alt={poster.title || "Poster image"}
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
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">{poster.title}</h2>
                {poster.date && (
                  <p className="text-sm text-gray-500 mb-2">{poster.date}</p>
                )}
                {poster.desc && (
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">{poster.desc}</p>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 capitalize">{poster.type || "Unknown type"}</span>
                  {poster.url && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(poster.url!, '_blank')}
                    >
                      {isImage(poster.url) ? (
                        <Eye className="mr-2 h-4 w-4" />
                      ) : (
                        <Download className="mr-2 h-4 w-4" />
                      )}
                      {isImage(poster.url) ? 'View' : 'Download'}
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

export default ComPosters