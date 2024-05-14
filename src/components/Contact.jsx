import "../styles/contact.css";
import emailLogo from "../assets/email-logo.png";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xexwt78", "template_svku0c8", form.current, {
        publicKey: "AvbhnA1H2iMIeyF6K",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div id="contact" className="form-container">
        <h2>Send Me An Email</h2>
        <div className="email">
          <img className="email-logo" src={emailLogo} alt="" />
          marian.d.kolev@gmail.com
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input className="user-name-input" type="text" name="user_name" />
          <label>Your Email</label>
          <input className="user-email-input" type="email" name="user_email" />
          <label>Your Message</label>
          <textarea className="message-input" name="message" />
          <input className="submit-button" type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
