import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
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
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP!</span>}
        </form>
      </div>
    </div>
  );
}
