import React from 'react'
import { PrismaClient } from '@prisma/client';
import VideoArchiveGallery from './VideoGallery';

const prisma = new PrismaClient();
export default async function Images() {
  const videos = await prisma.archive.findMany({
    where: {
      type: 'VIDEO',
    },
  });

  return (
    <div>
      

      <VideoArchiveGallery videoArchives={videos} />      
    </div>
  )
}

