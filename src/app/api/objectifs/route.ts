import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const objectifs = await prisma.objectif.findMany();
  return NextResponse.json(objectifs);
}

export async function POST(request: Request) {
  const body = await request.json();
  const objectif = await prisma.objectif.create({
    data: { label: body.label },
  });
  return NextResponse.json(objectif);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const objectif = await prisma.objectif.update({
    where: { id: body.id },
    data: { label: body.label },
  });
  return NextResponse.json(objectif);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await prisma.objectif.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Deleted successfully' });
}