import React from "react";
import style from "./contact.module.css";

export default function Form() {
  return (
    <main>
      <h1 className={style.contact_title}>Contact Me!</h1>
      <form className={style.contact_form}>
        <label className={style.label} htmlFor="name">Name:</label>
        <input className={style.input} type="text" id="name" name="name" required />
        <label className={style.label} htmlFor="email">Email:</label>
        <input className={style.input} type="text" id="email" name="email" required />
        <label className={style.label} htmlFor="msg">Message:</label>
        <textarea className={style.textarea} id="msg" name="msg" placeholder="" required></textarea>
        <input type="submit" className={style.submit_button} />
      </form>
    </main>
  );
}
