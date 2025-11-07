import React from "react";
import style from "./page.module.css";
import projects from "../portfolioData";
import PortfolioPreview from "@/Components/portfolioPreview";
import Carousel from "@/Components/portfolioCarousel";

export default function Portfolios() {
  return (
    <div className={style.portfolio_page}>
      <h1 className={style.portfolio_title}>Portfolio</h1>
        <Carousel />
    </div>
  );
}
