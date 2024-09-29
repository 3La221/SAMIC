'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"


interface Image {
  id: number
  url: string
  title?: string
  desc ?: string
}



export default async function  EnhancedImageGallery({images}: {images: Image[]}) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>
      {images.length === 0 ? (
        <p className="text-gray-500 text-center">No images found.</p>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="break-inside-avoid"
            >
              <button
                onClick={() => setSelectedImage(image)}
                className="w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                aria-label={`View ${image.title || 'image'}`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <Image
                    src={image.url}
                    alt={image.title || 'Gallery image'}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                      View Image
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl w-full h-auto aspect-auto">
          {selectedImage && (
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title || 'Selected image'}
                layout="responsive"
                width={800}
                height={600}
                objectFit="contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-1 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors duration-200"
                aria-label="Close image view"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}