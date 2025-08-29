import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // TODO: Replace these with your actual EmailJS credentials
    const serviceId = "service_2m76ndg"; // Replace with your service ID
    const templateId = "template_hk4hvjd"; // Replace with your template ID
    const publicKey = "XCP8Gd3wd1i8McP9E"; // Replace with your public key

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        setMessage(true);
        setLoading(false);
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        setError("Failed to send message. Please try again.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src={process.env.PUBLIC_URL + "/assets/shake04.png"}
          alt="Contact illustration"
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
          {message && <span className="success">Thanks, I'll reply ASAP!</span>}
          {error && <span className="error">{error}</span>}
        </form>
      </div>
    </div>
  );
}
