import { NextResponse } from 'next/server';
import  prisma  from '../../_lib/prisma';

export async function GET() {
  const formations = await prisma.formation.findMany();
  return NextResponse.json(formations);
}

export async function POST(request: Request) {
  const body = await request.json();
  const formation = await prisma.formation.create({
    data: { title: body.title,
            date : body.date,
            desc : body.desc,
     },
  });
  return NextResponse.json(formation);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const formation = await prisma.formation.update({
    where: { id: body.id },
    data: { title: body.title,
      date : body.date,
      desc : body.desc,
},
  });
  return NextResponse.json(formation);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await prisma.formation.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Deleted successfully' });
}