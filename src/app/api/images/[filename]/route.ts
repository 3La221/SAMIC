// app/api/images/[filename]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(process.cwd(), 'public', 'uploads');

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  const filename = params.filename;
  const filePath = path.join(UPLOAD_DIR, filename);

  try {
    const fileBuffer = await fs.readFile(filePath);
    
    // Determine the content type based on the file extension
    const ext = path.extname(filename).toLowerCase();
    let contentType = 'application/octet-stream'; // default
    if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.png') contentType = 'image/png';
    else if (ext === '.gif') contentType = 'image/gif';
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving image:', error);
    return NextResponse.json(
      { error: 'Image not found' },
      { status: 404 }
    );
  }
}