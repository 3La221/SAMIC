import React from 'react'
import { PrismaClient } from '@prisma/client';
import ComPosters from './CompostersGellery';

const prisma = new PrismaClient();
export default async function Composter() {
  const composters = await prisma.archive.findMany({
    where: {
      type: 'COMPOSTER',
    },
  });

  return (
    <div>
      <ComPosters posters={composters} />

         
    </div>
  )
}

