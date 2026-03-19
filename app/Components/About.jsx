"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function About() {
  const canvasRef = useRef(null);

  // Particle network background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 1 - 0.5;
        this.vy = Math.random() * 1 - 0.5;
        this.size = 2 + Math.random() * 2;
      }
      move() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > canvas.width || this.x < 0) this.vx *= -1;
        if (this.y > canvas.height || this.y < 0) this.vy *= -1;
      }
      draw() {
        ctx.fillStyle = "#00b4d8";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesArray = [];
    const numberOfParticles = 80;
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(0,180,216,${1 - distance / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.move();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener("resize", setSize);
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.2 },
    }),
  };

  // Education, Experience & Certifications
  const education = [
    "Abdul Wali Khan University Mardan",
    "BS Computer Science(Hons)",
    "GPA: 3.36/4.0",
  ];

  const experience = [
    "Internship (3 Months)",
    " Abdul Wali Khan University Mardan",
    "Internship (2 Months)" ,
     "Code Celix Nastap Islamabad",
    "Full Time Work Experience", 
    "2 months Work - Brand Raize, Riyyadh Saudi-based Company",
  ];

  const certifications = [
    "Introduction to Front-End Development (META) - https://coursera.org/verify/FPM4K7R9WQ9A",
    "Programming with JavaScript (META) - https://coursera.org/verify/GSDJG5JCUMV7",
    "React Basics (META) - https://coursera.org/verify/RZ94AXLNXWSD",
    "Advanced React (META) - https://coursera.org/verify/ENXCI43LC67Q",
    "React Hackathon (FLUXXION) – ID: 100136",
    "Technical Support Fundamentals (Google) - https://coursera.org/verify/5QR35TPHQPS2",
    "The Bits and Bytes of Computer Networking (Google) - https://coursera.org/verify/S25X7AKFAK39",
    "IT Security: Defense against the digital dark arts (Google) - https://coursera.org/verify/Z9H4GW6Y36FS",
    "Operating Systems and You: Becoming a Power User (Google) - https://coursera.org/verify/BVT4N8AAAYQU",
    "System Administration and IT Infrastructure Services(Google) - https://coursera.org/verify/FQ9DASBKHUAR",
    "Introduction To Networking (Nvidia) - https://coursera.org/verify/RT07474TE2HX",
    "Get Started with Spreadsheet Applications: Excel (SkillUp) - https://coursera.org/verify/FT8MBTZ3JPKF",
    "Introduction to Computers and Office Productivity Software (The Hong Kong University of Science and Technology) - https://coursera.org/verify/YWI6HS94AXEB",
    "FREELANCING (DigiSkills) Certificate ID: ZYF3WWFMK",
    "Digital Literacy (DigiSkills) Certificate ID: 5D86XT2Mk",
    "Google IT Support Badge (Google)",
    "Networks Badge (Cisco)",
  ];

  return (
    <section id="about" className="position-relative overflow-hidden py-5">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundColor: "#0d1b2a",
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.h1
          className="text-center mb-5 fw-bold text-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          About Me
        </motion.h1>

        <div className="row gy-4">
          {/* Education */}
          <div className="col-md-6">
            <motion.div
              className="shadow rounded p-4 mb-4 glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <h4 className="fw-bold mb-3 text-primary">Education</h4>
              {education.map((edu, i) => (
                <p key={i} className="mb-1 text-light">{edu}</p>
              ))}
            </motion.div>

            {/* Experience */}
            <motion.div
              className="shadow rounded p-4 mb-4 glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <h4 className="fw-bold mb-3 text-primary">Experience</h4>
              <ul className="list-unstyled text-light mb-0">
                {experience.map((exp, i) => (
                  <li key={i} className="mb-1">{exp}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Certifications */}
          <div className="col-md-6">
            <motion.div
              className="shadow rounded p-4 mb-4 glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
            >
              <h4 className="fw-bold mb-3 text-primary">Certifications</h4>
              <ul className="list-unstyled text-light">
                {certifications.map((cert, i) => {
                  const [text, link] = cert.split(" - ");
                  return (
                    <li key={i} className="mb-1">
                      {link ? (
                        <a
                          href={link.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light text-decoration-none"
                        >
                          {text}
                        </a>
                      ) : (
                        text
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        a.text-light:hover {
          color: #ffd700;
        }
      `}</style>
    </section>
  );
}
