import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import "./contact.css";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "751a8c56-43da-4b28-8ff0-be7c6f09e80d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact">
      <div className="contact">

        {/* LEFT SIDE */}
        <div className="contact-me">
          <h3>Contact Me</h3>

          <p>
            <IoIosMail color="red" />
            mussammilshathik2@gmail.com
          </p>

          <p>
            <FaGithub />
            <a href="https://github.com/mussammilshathik21" target="_blank" rel="noreferrer">
              github/mussammilshathik21
            </a>
          </p>

          <p>
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/mussammil-shathik-033769404/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>

          <p>
            <FaPhone color="green" />
            +91 8870394593
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="form">
          <form onSubmit={onSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              minLength="3"
            /> <br /> <br />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            /> <br /> <br />

            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea> <br /> <br />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* RESULT MESSAGE */}
            <p className="form-result">{result}</p>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;