import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await connectDB();
  const { slug } = params;

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
