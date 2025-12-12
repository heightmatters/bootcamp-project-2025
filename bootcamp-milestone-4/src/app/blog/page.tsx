import React from "react";
import BlogPreview from "@/Components/blogPreview";
import style from "./page.module.css";
import connectDB from "../../database/db";
import Blog from "../../database/blogSchema";
import CommentForm from "@/Components/commentForm";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date (most recent blog)
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;  
  }
}

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div>
      <h1 className={style.blog_title}>My Blogs</h1>
      <div className={style.blog_container}>
        {!blogs ? (
          // Checks for potential issues with blogs//
          <p>Failed to load blogs. Please try again later.</p>
        ) : blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          blogs.map((blog: any) => (
            <BlogPreview
              title={blog.title}
              date={blog.date}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.imageAlt}
              slug={blog.slug}
              id={blog.id}
              key={blog.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
