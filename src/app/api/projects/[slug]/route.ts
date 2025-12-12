// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> | { slug: string } }
) {
  await connectDB();

  // Normalize params for both TS and runtime behavior
  const params = await Promise.resolve(context.params);
  const { slug } = params;

  try {
    const project = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Project not found", { status: 404 });
  }
}
