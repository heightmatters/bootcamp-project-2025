import React from "react";
import style from "./homepage.module.css";
import Image from "next/image";
import PFPIMG from "../../public/PFP.jpg";

export default function Homepage() {
  return (
    <main>
      <h1 className={style.index_title}>Welcome to My Website!</h1>
      <div className={style.about}>
        <div className={style.about_image}>
          <Image src={PFPIMG} alt="Image of me!" />
        </div>
        <div>
          <p className={style.about_text}>
            Hello everyone viewing my page, my name is{" "}
            <strong>Noah Chang</strong> and I am first year computer science
            major. Aside from my student life, I am a classical musician,
            playing both the piano and alto saxophone. I also love to write
            classical music!
          </p>
          <p className={style.about_text}>
            My goals are to work hard this year and learn valuable life skills
            like leading, problem solving and self-learning.
          </p>
        </div>
      </div>
    </main>
  );
}
