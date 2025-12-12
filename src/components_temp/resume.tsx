import React from "react";
import style from "./resume.module.css";

export default function ResumePage() {
  return (
    <main>
      <h1 className={style.resume_title}>Resume</h1>
      <a
        className={style.button}
        href="Noah Chang_Hack4Impact_Resume (1).pdf"
        download
      >
        Download Resume
      </a>
      <div className={style.resume}>
        <section className={style.section}>
          <h2 className={style.section_title}>Education</h2>
          <div className={style.entry}>
            <h3 className={style.entry_title}></h3>
            <p className={style.entry_info}></p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.section_title}>Experience</h2>
          <div className={style.entry}>
            <h3 className={style.entry_title}>
              FreshStart Piano Studio Teacher
            </h3>
            <p className={style.entry_info}>
              FreshStart Piano Studio | 2022-2025
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.section_title}>Projects</h2>
          <div className={style.entry}>
            <h3 className={style.entry_title}>Personal Website</h3>
            <p className={style.entry_info}>
              Designed and built a personal website using HTML and CSS
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.section_title}>Coursework</h2>
          <div className={style.entry}>
            <p className={style.entry_description}></p>
            <ul className={style.course_list}></ul>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.section_title}>Skills</h2>
          <div className={style.entry}>
            <p className={style.entry_description}></p>
            <ul className={style.skill_list}></ul>
          </div>
        </section>
      </div>
    </main>
  );
}
