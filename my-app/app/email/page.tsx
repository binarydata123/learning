"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(email)

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const serviceId = "service_r6okdhh";
    const templateId = "template_nihcloe";
    const publicKey = "HXa2RIa0EKKNIoxj4";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: username,
      from_email: email,
      to_name: "web host",
      message: message
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label className={styles.label}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className={styles.label}>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
