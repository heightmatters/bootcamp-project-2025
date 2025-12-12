"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [fromName, setFromName] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!fromName || !replyTo || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    setStatus("Sending...");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: fromName,
          reply_to: replyTo,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("Email sent successfully!");
      setFromName("");
      setReplyTo("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("Error");
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.contact_form}>
      <h1 className={styles.contact_title}>Contact Me</h1>

      <label className={styles.label}>Your Name</label>
      <input
        className={styles.input}
        type="text"
        value={fromName}
        onChange={(e) => setFromName(e.target.value)}
        placeholder="Name"
        required
      />

      <label className={styles.label}>Your Email</label>
      <input
        className={styles.input}
        type="email"
        value={replyTo}
        onChange={(e) => setReplyTo(e.target.value)}
        placeholder="Your Email"
        required
      />

      <label className={styles.label}>Message</label>
      <textarea
        className={styles.textarea}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message here..."
        required
      />

      <button type="submit" className={styles.submit_button}>
        Send Message
      </button>

      {status && (
        <p style={{ marginTop: "16px", textAlign: "center" }}>{status}</p>
      )}
    </form>
  );
}
