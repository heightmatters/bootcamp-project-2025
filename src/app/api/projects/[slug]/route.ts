import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await connectDB();

  const { slug } = await context.params;

  try {
    const project = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Project not found", { status: 404 });
  }
}
