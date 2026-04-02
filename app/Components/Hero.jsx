"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const hero = canvas.parentElement;
    let width = canvas.width = hero.offsetWidth;
    let height = canvas.height = hero.offsetHeight;

    const resizeCanvas = () => {
      width = canvas.width = hero.offsetWidth;
      height = canvas.height = hero.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random() * 1 - 0.5;
        this.vy = Math.random() * 1 - 0.5;
        this.size = 2 + Math.random() * 2;
      }
      move() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > width || this.x < 0) this.vx *= -1;
        if (this.y > height || this.y < 0) this.vy *= -1;
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
            ctx.strokeStyle = "rgba(0, 180, 216," + (1 - distance / 120) + ")";
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
      ctx.clearRect(0, 0, width, height);
      particlesArray.forEach(p => {
        p.move();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="hero-section d-flex align-items-center justify-content-center text-center">
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      />

      <div className="container">
        <motion.h1
          className="display-3 fw-bold text-light"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-primary">Muhammad Shahab Zada</span>
        </motion.h1>

        <motion.h2
          className="mt-3 text-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          className="mt-3 text-light mx-auto"
          style={{ maxWidth: "600px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build modern, responsive, and animated web applications
          with beautiful UI and smooth user experience.
        </motion.p>

        <motion.div
          className="mt-4 d-flex gap-3 justify-content-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-info px-4 glow"
          >
            View Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-outline-light px-4"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-4 d-flex gap-3 justify-content-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/muhammad-shahab-zada-134823348/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={26} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/Shahab-Zada"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={26} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://wa.me/923199001379"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp size={26} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:shahabzada302@gmail.com"
            className="social-icon"
          >
            <FaEnvelope size={26} />
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding-top: 80px;
          z-index: 1;
          background-color: #0d1b2a;
        }

        h1 span {
          background: linear-gradient(90deg, #00b4d8, #90e0ef);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(27, 38, 59, 0.6);
          border: 1px solid rgba(119, 141, 169, 0.3);
          color: #00b4d8;
          transition: 0.3s;
        }

        .social-icon:hover {
          background: #00b4d8;
          color: #0d1b2a;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}