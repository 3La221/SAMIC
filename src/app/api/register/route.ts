import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/app/_lib/prisma";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}