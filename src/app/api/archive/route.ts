import { NextResponse } from 'next/server';
import  prisma  from '../../_lib/prisma';

export async function GET() {
  const archives = await prisma.archive.findMany();
  return NextResponse.json(archives);
}

export async function POST(request: Request) {
  const body = await request.json();
  const archive = await prisma.archive.create({
      data: { 
            title: body.title,
            date: body.date,
            url: body.url,
            desc: body.desc,
            type: body.type

      },
    });
  return NextResponse.json(archive);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const archive = await prisma.archive.update({
    where: { id: body.id },
    data: { 
      title: body.title,
      date: body.date,
      url: body.url,
      desc: body.desc,
      type: body.type

},
  });
  return NextResponse.json(archive);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await prisma.archive.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Deleted successfully' });
}