"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./portfolioCarousel.module.css";
import projects from "../app/portfolioData";
import PortfolioPreview from "@/Components/portfolioPreview";
import Link from "next/link";

export default function Carousel() {
  const [targetSpeed, setTargetSpeed] = useState(2.5);
  const groupRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const currentSpeedRef = useRef(0.5);

  useEffect(() => {
    const el = groupRef.current!;
    let frame: number;

    const animate = () => {
      currentSpeedRef.current += (targetSpeed - currentSpeedRef.current) * 0.05;
      offsetRef.current -= currentSpeedRef.current;
      el.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      if (Math.abs(offsetRef.current) > el.scrollWidth / 2) {
        offsetRef.current = 0;
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetSpeed]);
  return (
    <div
      className={style.carousel}
      onMouseEnter={() => setTargetSpeed(0.5)}
      onMouseLeave={() => setTargetSpeed(2.5)}
    >
      <div ref={groupRef} className={style.group}>
        {projects.concat(projects).map((project, index) => (
          <PortfolioPreview {...project} key={project.id + "-dup" + index} />
        ))}
      </div>
      <div className={style.group}>
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.slug}
            onMouseEnter={() => setTargetSpeed(0.5)}
            onMouseLeave={() => setTargetSpeed(2.5)}
          >
            <PortfolioPreview
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              slug={project.slug}
              id={project.id}
              key={project.id}
            />
          </Link>
        ))}
      </div>
      <div aria-hidden={true} className={style.group}>
        {projects.map((project) => (
          <Link
            key={project.id + "-dup"}
            href={project.slug}
            onMouseEnter={() => setTargetSpeed(0.5)}
            onMouseLeave={() => setTargetSpeed(2.5)}
          >
            <PortfolioPreview
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              slug={project.slug}
              id={project.id}
              key={project.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
