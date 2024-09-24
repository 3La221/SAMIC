import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/_lib/prisma';
import path from 'path';
import { writeFile } from 'fs/promises';

const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(process.cwd(), 'public', 'uploads');

export async function GET() {
  try {
    const actualites = await prisma.actualite.findMany();
    return NextResponse.json(actualites);
  } catch (error) {
    console.error('Error fetching actualites:', error);
    return NextResponse.json({ error: 'Failed to fetch actualites' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const date = formData.get('date') as string;
    const img = formData.get('img') as File;
 
    if (!img) {
      return NextResponse.json({ error: 'Image is required' }, { status: 400 });
    }

    const bytes = await img.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${img.name}`;
    await writeFile(path.join(UPLOAD_DIR, filename), buffer);

    const actualite = await prisma.actualite.create({
      data: { title, date, img: filename },
    });

    return NextResponse.json(actualite);
  } catch (error) {
    console.error('Error creating actualite:', error);
    return NextResponse.json({ error: 'Failed to create actualite' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const formData = await request.formData();
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const date = formData.get('date') as string;
    const file = formData.get('img') as File | null;

    let filename = undefined;
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      filename = `${Date.now()}-${file.name}`;
      await writeFile(path.join(UPLOAD_DIR, filename), buffer);
    }

    const actualite = await prisma.actualite.update({
      where: { id: Number(id) },
      data: {
        title,
        date,
        ...(filename && { img: filename }),
      },
    });

    return NextResponse.json(actualite);
  } catch (error) {
    console.error('Error updating actualite:', error);
    return NextResponse.json({ error: 'Failed to update actualite' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    await prisma.actualite.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error deleting actualite:', error);
    return NextResponse.json({ error: 'Failed to delete actualite' }, { status: 500 });
  }
}