// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await connectDB();
  const { slug } = params;

  try {
    const project = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}
