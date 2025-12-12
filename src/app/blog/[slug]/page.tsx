// app/blog/[slug]/page.tsx
export const dynamic = "force-dynamic";

import style from "./blogPage.module.css";
import Comment from "@/components/comment";
import CommentForm from "@/components/commentForm";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    // Use Vercel server URL in production, localhost in dev
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/blogpage/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blog");
    return res.json();
  } catch (err) {
    console.error("error:", err);
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <main>
      <h1 className={style.blog_title}>{blog.title}</h1>
      <h3 className={style.blog_date}>
        Date: {new Date(blog.date).toLocaleDateString()}
      </h3>
      <img className={style.blog_image} src={blog.imageUrl} />
      <nav className={style.blog_toc}>
        <h2 className={style.toc}>Table of Contents</h2>
        <ul className={style.toc_list}>
          {blog.sections.map((section: any) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.heading}</a>
            </li>
          ))}
        </ul>
      </nav>
      {blog.sections.map((section: any) => (
        <section
          key={section.id}
          id={section.id}
          className={style.blog_section}
        >
          <h2 className={style.sectionheading}>{section.heading}</h2>
          {section.body.map((p: string, i: number) => (
            <div
              key={i}
              className={style.p}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </section>
      ))}
      <h2 className={style.blog_title}>Comments</h2>
      <div>
        {blog.comments?.map((comment: any, index: any) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
      <CommentForm slug={slug} />
    </main>
  );
}
