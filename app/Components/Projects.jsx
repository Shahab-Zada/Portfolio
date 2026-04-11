"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce App",
    image: "/project2.png",
    github: "https://github.com/Shahab-Zada/EcomWeb",
    live: "",
  },
  {
    title: "Final Year Project Management System",
    image: "/Fyp.png",
    github: "https://github.com/Shahab-Zada/Management",
    live: "https://awkumtech.awkum.edu.pk/",
  },
  {
    title: "Rajee Marketplace",
    image: "/Rajee.png",
    github: "https://github.com/Shahab-Zada/Rajee",
    live: "",
  },
  {
    title: "BrandRaize Software Company Website",
    image: "/project1.png",
    github: "",
    live: "https://brandraize.com",
  },
];

export default function Projects() {
  const canvasRef = useRef(null);

  // 🔵 Particles Background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

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
        ctx.fillStyle = "rgba(119,141,169,0.6)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#415a77";
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

  return (
    <section
      id="projects"
      className="position-relative py-5"
      style={{ background: "#0d1b2a" }}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* 🔥 Heading */}
        <motion.h1
          className="text-center fw-bold mb-3 text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          My Projects
        </motion.h1>

        {/* ✨ NEW DESCRIPTION */}
        <p
          className="text-center text-light mb-5"
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Here are some of the projects I’ve worked on, showcasing my skills in
          building modern, scalable, and user-friendly applications. Each
          project reflects my passion for clean design and efficient solutions.
        </p>

        <div className="row">
          {projects.map((proj, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <motion.div
                className="project-card p-3 rounded"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                {/* Image */}
                <div className="img-container">
                  <img src={proj.image} alt={proj.title} />
                </div>

                <h5 className="text-light mt-3">{proj.title}</h5>

                {/* 🔥 Buttons */}
                <div className="d-flex gap-2 mt-2 flex-wrap">
                  
                  {/* GitHub Button (only if exists) */}
                  {proj.github && (
                    <button
                      className="btn btn-outline-light"
                      onClick={() => window.open(proj.github, "_blank")}
                    >
                      <FaGithub className="me-2" />
                      GitHub Code
                    </button>
                  )}

                  {/* Live Button (only if exists) */}
                  {proj.live && (
                    <button
                      className="btn btn-primary"
                      onClick={() => window.open(proj.live, "_blank")}
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: rgba(13, 27, 42, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(119, 141, 169, 0.3);
          transition: 0.3s;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .img-container {
          height: 250px;
          overflow: hidden;
          border-radius: 10px;
        }

        .img-container img {
          width: 100%;
          transition: transform 4s ease;
        }

        .img-container:hover img {
          transform: translateY(-50%);
        }
      `}</style>
    </section>
  );
}