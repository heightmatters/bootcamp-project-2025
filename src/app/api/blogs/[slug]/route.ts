// @ts-nocheck

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> | { slug: string } }
) {
  await connectDB();

  // Support both the buggy TS Promise type AND the real runtime object:
  const params = await Promise.resolve(context.params);
  const { slug } = params;

  try {
    const page = await blogPagesSchema.findOne({ slug }).orFail();
    return NextResponse.json(page);
  } catch (err) {
    return NextResponse.json("Blog page not found.", { status: 404 });
  }
}
