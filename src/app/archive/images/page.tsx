import React from 'react'
import { PrismaClient } from '@prisma/client';
import ImageGallery from './ImageGallery';

const prisma = new PrismaClient();
export default async function Images() {
  const images = await prisma.archive.findMany({
    where: {
      type: 'IMAGE',
    },
  });

  return (
    <div>
      

      <ImageGallery images={images} />
      
    </div>
  )
}

