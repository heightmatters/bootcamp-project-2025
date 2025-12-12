// Components/projectCarousel.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./projectCarousel.module.css";
import ProjectPreview from "@/Components/projectPreview";
import Link from "next/link";

export default function Carousel({ projects }: { projects: any[] }) {
  //setting a target speed for the scroll//
  const [targetSpeed, setTargetSpeed] = useState(2.5);
  const groupRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const currentSpeedRef = useRef(0.5);

  useEffect(() => {
    const el = groupRef.current;
    if (!el) return;
    let frame: number;
    const animate = () => {
      //smooth acceleration and deceleration//
      currentSpeedRef.current += (targetSpeed - currentSpeedRef.current) * 0.05;
      //moving the track left//
      offsetRef.current -= currentSpeedRef.current;
      //translation//
      el.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      //loops so that the carousel runs seamlesly//
      if (Math.abs(offsetRef.current) > el.scrollWidth / 2)
        offsetRef.current = 0;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetSpeed]);

  if (!projects?.length) return null;

  return (
    //hover for the carousel//
    <div
      className={style.carousel}
      onMouseEnter={() => setTargetSpeed(0.5)}
      onMouseLeave={() => setTargetSpeed(2.5)}
    >
      <div ref={groupRef} className={style.group}>
        {projects.concat(projects).map((project: any, i: number) => (
          <Link
            key={(project._id ?? project.id) + "-dup-" + i}
            href={project.slug}
          >
            <ProjectPreview {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
}
