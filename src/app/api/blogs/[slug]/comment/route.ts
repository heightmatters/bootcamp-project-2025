// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import BlogPage from "@/database/blogPageSchema";

export async function POST(req: NextRequest, { params }: any) {
  try {
    //Connect to mongo//
    await connectDB();
    const { slug } = params;
    const body = await req.json();
    const { user, comment } = body;

    //catch//
    if (!user || !comment) {
      return NextResponse.json(
        { error: "Missing information" },
        { status: 400 }
      );
    }

    //making the comment to be updated to mongoDB//
    const newComment = {
      user,
      comment,
      time: new Date(),
    };

    //updating mongo//
    const updatedBlog = await BlogPage.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    );

    //checks//
    if (!updatedBlog) {
      return NextResponse.json(
        { error: "Can't update to specified blog" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Comment added successfully", blog: updatedBlog },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
