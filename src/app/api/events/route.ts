import { NextResponse } from 'next/server';
import  prisma  from '../../_lib/prisma';

export async function GET() {
  const events = await prisma.event.findMany();
  return NextResponse.json(events);
}

export async function POST(request: Request) {
  const body = await request.json();
  const event = await prisma.event.create({
    data: { title: body.title,
            date : body.date,
            desc : body.desc,
     },
  });
  return NextResponse.json(event);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const event = await prisma.event.update({
    where: { id: body.id },
    data: { title: body.title,
      date : body.date,
      desc : body.desc,
},
  });
  return NextResponse.json(event);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await prisma.event.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Deleted successfully' });
}