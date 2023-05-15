import React, { useState } from "react";
import css from "../styles/Contacts.module.css";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.log(name, email, message);
    resetForm();
    toast.success("Message sent!");
  };

  return (
    <div id="contact" className={css.contact}>
      <h2 className={css.title}>Contact Us</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name:
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label className={css.label}>
          Email:
          <input
            className={css.input}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label className={css.label}>
          Message:
          <textarea
            className={css.textarea}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>
        <button className={css.button} type="submit">
          Submit
        </button>
        <Link href="/">
          <a className={css.button}>Home</a>
        </Link>
        <Toaster />
      </form>
    </div>
  );
};

export default Contact;
