import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request: Request) {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  console.log(data);
  return NextResponse.json(data);
}
