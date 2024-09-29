"use client"
import React from 'react'

interface Archive {
  id: number
  title: string | null
  date: string | null
  url: string | null
  desc: string | null
  type: string | null
}

interface VideoArchiveGalleryProps {
      videoArchives : Archive[]
}

const VideoArchiveGallery: React.FC<VideoArchiveGalleryProps> = ({ videoArchives }) => {

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoArchives.map((video) => {
          const videoId = video.url ? getYouTubeVideoId(video.url) : null
          return (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {videoId && (
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title || "YouTube video"}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold line-clamp-2">{video.title}</h2>
                {video.date && (
                  <p className="text-sm text-gray-600 mt-1">{video.date}</p>
                )}
                {video.desc && (
                  <p className="text-sm text-gray-700 mt-2 line-clamp-3">{video.desc}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VideoArchiveGallery