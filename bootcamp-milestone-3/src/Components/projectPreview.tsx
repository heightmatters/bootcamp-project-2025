"use client";

import React from "react";
import style from "./projectPreview.module.css";
import Image from "next/image";

type ProjectPreviewProps = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
};

//destructuring//
export default function ProjectPreview({
  title,
  image,
  imageAlt,
  description,
}: ProjectPreviewProps) {
  return (
    <div className={style.project_container}>
      <h2>{title}</h2>
      <Image
        className={style.project_image}
        src={image}
        alt={imageAlt || "Project image"}
        width={400}
        height={300}
      />
      <p>{description}</p>
    </div>
  );
}
