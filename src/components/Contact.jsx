import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_6w1lzib",   // your service id
      "rw1omt6",          // your template id
      e.target,
      "hHeTzQ_VFOIU3HDLn"  // your public key
    )
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send message");
    });
  }

  return (
    <section id="contact">
    <div className="contact">

      <div className="contact-me" data-aos="fade-right" data-aos-duration="1000">
        <h3>Contact Me</h3>

        <p>
          <IoIosMail color="red" />
          mussammilshathik2@gmail.com
        </p>

        <p>
          <FaGithub color="#181717" />
          <a href="https://github.com/mussammilshathik21">
            github/mussammilshathik21
          </a>
        </p>

        <p>
          <FaLinkedin color="#1889a8" />
          <a href="#">LinkedIn</a>
        </p>

        <p>
          <FaPhone color="green" />
          +91 8870394593
        </p>
      </div>


      <div className="form" data-aos="fade-left" data-aos-duration="1000">
        <form onSubmit={sendEmail}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          /> <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          /> <br /><br />

          <textarea
            name="message"
            placeholder="Message"
            required
          ></textarea><br /><br />

          <button type="submit">Send Message</button>

        </form>
      </div>

    </div>
    </section>
  );
}

export default Contact;