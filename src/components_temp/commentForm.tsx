"use client";

import { useState } from "react";
import styles from "./commentForm.module.css";

export default function CommentForm({ slug }: { slug: string }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/Blogs/${slug}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, comment }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Error");
      return;
    }

    setMessage("Comment added!");
    setUser("");
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <h3>Leave a Comment!</h3>

      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
        className={styles.input}
      />

      <textarea
        placeholder="Write your comment here!"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        className={styles.textarea}
      ></textarea>

      <button type="submit" className={styles.submitbutton}>
        Post!
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}
