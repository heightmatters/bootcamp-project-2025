import React from "react";
import Link from "next/link";
import BlogPreview from "@/Components/blogPreview";
import blogs from "../blogData";
import style from "./page.module.css";

export default function Blogs() {
  return (
    <div>
      <h1 className={style.blog_title}>My Blogs</h1>
      <div className={style.blog_container}>
        {blogs.map((blog) => (
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
        ))}
      </div>
    </div>
  );
}
