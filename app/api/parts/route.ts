import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET ALL PARTS
export async function GET() {
  const parts = await prisma.part.findMany();
  return NextResponse.json(parts);
}
