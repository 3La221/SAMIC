import { NextResponse } from 'next/server';
import  prisma  from '../../_lib/prisma';
import path from 'path';
import { writeFile } from 'fs/promises';

export async function GET() {
  const actualites = await prisma.actualite.findMany();
  return NextResponse.json(actualites);
}

export async function POST(request: Request) {
  const formaData = await request.formData();
  const title = formaData.get('title') as string;
  const date = formaData.get('date') as string;
  const img = formaData.get('img') as File;

  

  if(!img){
    return NextResponse.json({ message: 'Image is required' }, { status: 400 });
  }

  const bytes = await img.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = `${Date.now()}-${img.name}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await writeFile(path.join(uploadDir, filename), buffer);
  const actualite = await prisma.actualite.create({
    data: { title, date, img: `/uploads/${filename}` },
  });
  return NextResponse.json(actualite);

}

export async function PUT(request: Request
  
) {
  const formData = await request.formData();
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const date = formData.get('date') as string;
  const file = formData.get('img') as File | null;

  let filename = undefined;

  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file
    filename = Date.now() + '-' + file.name;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await writeFile(path.join(uploadDir, filename), buffer);
  }

  // Update database
  const actualite = await prisma.actualite.update({
    where: { id: Number(id) },
    data: {
      title,
      date,
      ...(filename && { img: filename }),
    },
  });

  return NextResponse.json(actualite);
}


export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await prisma.actualite.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Deleted successfully' });
}