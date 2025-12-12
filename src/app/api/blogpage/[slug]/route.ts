// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import BlogPage from "@/database/blogPageSchema";

export async function GET(req, context) {
  await connectDB();

  const params = await Promise.resolve(context.params);
  console.log("🔥 SERVER RECEIVED PARAMS:", params);

  const { slug } = params;
  console.log("🔥 SERVER RECEIVED SLUG:", slug);

  try {
    const page = await BlogPage.findOne({ slug });
    console.log("🔥 MONGO RESULT:", page);
    if (!page) throw new Error("No page returned");
    return NextResponse.json(page);
  } catch (err) {
    console.error("🔥 ERROR FETCHING BLOG:", err);
    return NextResponse.json("Blog page not found.", { status: 404 });
  }
}
