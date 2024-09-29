import React from 'react'
import { PrismaClient } from '@prisma/client';
import Editions from './EditionsGallery';

const prisma = new PrismaClient();
export default async function Composter() {
  const editions = await prisma.archive.findMany({
    where: {
      type: 'EDITION',
    },
  });

  return (
    <div>
      <Editions editions={editions} />

         
    </div>
  )
}

