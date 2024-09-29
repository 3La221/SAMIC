import React from 'react'
import { PrismaClient } from '@prisma/client';
import Publications from './PublicationGallery';

const prisma = new PrismaClient();
export default async function Composter() {
  const pubs = await prisma.archive.findMany({
    where: {
      type: 'PUBLICATION',
    },
  });

  return (
    <div>
      <Publications publications={pubs} />

         
    </div>
  )
}

