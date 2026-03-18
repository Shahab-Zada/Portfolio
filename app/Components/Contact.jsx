"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const canvasRef = useRef(null);

  // 🔵 PARTICLES (Dark Blue Theme)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particlesArray = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = "#add8e6"; // light blue
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#415a77"; // glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 80; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }, []);

  // 📩 EMAIL
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sqb6z4d",
        "template_8rcmsls",
        formRef.current,
        "K_tSDBT4Qx96A0IDh"
      )
      .then(
        () => {
          alert("✅ Message sent!");
          formRef.current.reset();
        },
        () => {
          alert("❌ Failed to send.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="position-relative py-5"
      style={{ background: "#0d1b2a" }}
    >
      {/* 🔵 Canvas */}
      <canvas
        ref={canvasRef}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.h1
          className="text-center fw-bold mb-4"
          style={{ color: "#e0e1dd" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Contact Me
        </motion.h1>

        <div className="row justify-content-center">
          <div className="col-md-8">

            {/* ✨ Glass Form */}
            <motion.div
              className="p-4 rounded shadow"
              style={{
                background: "rgba(13, 27, 42, 0.6)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(119, 141, 169, 0.3)",
              }}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <h4 className="text-center mb-4" style={{ color: "#e0e1dd" }}>
                Send Message
              </h4>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="d-grid gap-4"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="form-control bg-transparent text-light border-0"
                  style={{ borderBottom: "1px solid #778da9" }}
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="form-control bg-transparent text-light border-0"
                  style={{ borderBottom: "1px solid #778da9" }}
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="form-control bg-transparent text-light border-0"
                  style={{ borderBottom: "1px solid #778da9" }}
                ></textarea>

                <button className="btn btn-outline-light fw-bold">
                  Send
                </button>
              </form>
            </motion.div>

            {/* 🔗 Social Icons */}
            <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">

              <motion.div
                whileHover={{ scale: 1.2 }}
                className="icon-box"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/muhammadshahab-zada-134823348/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin size={26}  color="white"/>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                className="icon-box"
                onClick={() =>
                  window.open("https://wa.me/923199001379", "_blank")
                }
              >
                <FaWhatsapp size={26}  color="white" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                className="icon-box"
                onClick={() =>
                  window.open("https://github.com/Shahab-Zada", "_blank")
                }
              >
                <FaGithub size={26}  color="white"/>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                className="icon-box"
                onClick={() =>
                  (window.location.href = "mailto:shahabzada302@gmail.com")
                }
              >
                <FaEnvelope size={26}  color="white"/>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* 🎨 Styles */}
      <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: #aab3c5;
        }

        .icon-box {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          color: #e0e1dd;
          background: rgba(27, 38, 59, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(119, 141, 169, 0.3);
          transition: 0.3s;
        }

        .icon-box:hover {
          background: #415a77;
          color: #ffffff;
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}