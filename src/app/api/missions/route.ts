import { NextResponse } from 'next/server';
import  prisma  from '../../_lib/prisma';

export async function GET() {
  const missions = await prisma.mission.findMany();
  return NextResponse.json(missions);
}

export async function POST(request: Request) {
  const body = await request.json();
  const mission = await prisma.mission.create({
      data: { 
            label: body.label,
      },
    });
  return NextResponse.json(mission);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const mission = await prisma.mission.update({
    where: { id: body.id },
    data: { label: body.label },
  });
  return NextResponse.json(mission);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await prisma.mission.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Deleted successfully' });
}