import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar}>
      <h1 className={style.logo}> Noah Chang</h1>
      <nav className={style.nav_list}>
        <Link href="/">Home</Link>
        <Link href="/Blog">Blogs</Link>
        <Link href="/Portfolio">Portfolio</Link>
        <Link href="/Resume">Resume</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
    </header>
  );
}
