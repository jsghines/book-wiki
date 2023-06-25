import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: Request) {
  const user = await prisma.user.findFirst();
  return NextResponse.json(user);
}

export async function POST(request: Request) {
  await prisma.user.create({
    data: {
      name: 'bitch',
      email: 'shakaboom@example.com'
    }
  });
  return NextResponse.json({'banana': 'jamma'});
}