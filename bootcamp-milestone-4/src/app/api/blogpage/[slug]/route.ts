import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogPagesSchema from "@/database/blogPageSchema";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await connectDB();

  const { slug } = await context.params;

  console.log("API RECEIVED SLUG:", slug);

  try {
    const page = await blogPagesSchema.findOne({ slug }).orFail();
    return NextResponse.json(page);
  } catch (err) {
    return NextResponse.json("Blog page not found.", { status: 404 });
  }
}
