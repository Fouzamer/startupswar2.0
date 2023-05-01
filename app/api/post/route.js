import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { projectName, member1, member2, member3, description } = body;

  const startup = await prisma.startup.create({
    data: {
    projectName,
    member1,
    member2,
    member3,
    description,
    display: true,
    vote:0
    },
  });

  return NextResponse.json(startup);
}

export async function GET(request) {
  const startups = await prisma.startup.findMany(
    {where: { display: true}}
  );
  return NextResponse.json(startups);
}