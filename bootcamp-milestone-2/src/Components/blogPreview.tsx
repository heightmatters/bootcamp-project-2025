import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import { Blog } from "@/app/blogData";
import Link from "next/link"

export default function BlogPreview(props: Blog) {
  return (
    <Link href={props.slug}>
      <div className={style.blog_post_container}>
        <h2>{props.title}</h2>
        <Image
          className={style.blog_container_img}
          src={props.image}
          alt="img"
          width={500}
          height={500}
        ></Image>
        <p className={style.blog_container_description}>{props.description}</p>
        {/* <p>{props.date}</p> */}
      </div>
     </Link> 
  );
}
