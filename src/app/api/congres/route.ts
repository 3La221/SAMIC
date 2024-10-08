import { NextResponse } from 'next/server';
import  prisma  from '../../_lib/prisma';

export async function GET() {
  const congres = await prisma.congres.findMany();
  return NextResponse.json(congres);
}

export async function POST(request: Request) {
  const body = await request.json();
  const congres = await prisma.congres.create({
    data: { title: body.title , url : body.url },
  });
  return NextResponse.json(congres);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const congres = await prisma.congres.update({
    where: { id: body.id },
    data: { title: body.title , url : body.url },
  });
  return NextResponse.json(congres);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await prisma.congres.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Deleted successfully' });
}