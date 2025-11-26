import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogPagesSchema from "@/database/blogPageSchema"

type IParams = {
  params: {
    slug: string
  }
}

export async function GET(req: NextRequest, { params }: IParams) {
  console.log("API RECEIVED SLUG:", params.slug)
  await connectDB()
  const { slug } = params

  try {
    const page = await blogPagesSchema.findOne({ slug }).orFail()
    return NextResponse.json(page)
  } catch (err) {
    return NextResponse.json('Blog page not found.', { status: 404 })
  }
}
