import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";

type BlogPreviewProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  id: string;
};

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
  id,
}: BlogPreviewProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className={style.blog_post_container}>
        <h2>{title}</h2>
        <Image
          className={style.blog_container_img}
          src={image}
          alt={imageAlt || "blog image"}
          width={500}
          height={500}
        />
        <p className={style.blog_container_description}>{description}</p>
        <p className={style.blog_container_date}>
          {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
}
