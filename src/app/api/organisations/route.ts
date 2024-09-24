import { NextResponse } from 'next/server';
import  prisma  from '../../_lib/prisma';
import path from 'path';
import { writeFile } from 'fs/promises';

export async function GET() {
  const organisations = await prisma.organisation.findMany();
  return NextResponse.json(organisations);
}

export async function POST(request: Request) {
  const formaData = await request.formData();
  const title = formaData.get('title') as string;
  const desc = formaData.get('desc') as string;
  const img = formaData.get('img') as File;

  console.log(title, desc, img);

  if(!img){
    return NextResponse.json({ message: 'Image is required' }, { status: 400 });
  }

  const bytes = await img.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = `${Date.now()}-${img.name}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await writeFile(path.join(uploadDir, filename), buffer);
  const organisation = await prisma.organisation.create({
    data: { title, desc, img: `/uploads/${filename}` },
  });
  return NextResponse.json(organisation);


}





export async function PUT(request: Request
  
) {
  const formData = await request.formData();
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const desc = formData.get('desc') as string;
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
  const organisation = await prisma.organisation.update({
    where: { id: Number(id) },
    data: {
      title,
      desc,
      ...(filename && { img: filename })
    },
  });

  return NextResponse.json(organisation);
}


export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await prisma.organisation.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: 'Deleted successfully' });
}