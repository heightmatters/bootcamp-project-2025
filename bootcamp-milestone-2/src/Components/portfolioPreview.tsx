import React from "react";
import style from "./portfolioPreview.module.css";
import { Portfolio } from "@/app/portfolioData";
import Image from "next/image";

export default function PorfolioPreview(props: Portfolio) {
  return (
    <div className={style.project_container}>
      <h2>{props.title}</h2>
      <Image className={style.project_image} src={props.image} alt="img"></Image>
      <p>{props.description}</p>
    </div>
  );
}
