import React from "react";
import style from "./page.module.css";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import Carousel from "@/Components/projectCarousel";

async function getProjects() {
  await connectDB();
  try {
    const allProjects = await Project.find().sort({ title: 1 }).lean().orFail();
    const plainProjects = JSON.parse(JSON.stringify(allProjects));
    return plainProjects;
  } catch (err) {
    console.error("❌ Error fetching projects:", err);
    return null;
  }
}

export default async function ProjectsPage() {
  const projectData = await getProjects();

  return (
    <div className={style.portfolio_page}>
      <h1 className={style.portfolio_title}>Projects</h1>
      <Carousel projects={projectData ?? []} />
    </div>
  );
}
