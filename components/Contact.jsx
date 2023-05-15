import React, { useState } from "react";
import css from "../styles/Contacts.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className={css.contact}>
      <h2 className={css.title}>Contact Us</h2>
      <form className={css.form} onSubmit={handleSubmit} reset>
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
      </form>
    </div>
  );
};

export default Contact;
