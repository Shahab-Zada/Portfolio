"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// ✅ Use public folder URLs directly
const projects = [
  {
    title: "E-Commerce App",
    image: "/project2.png", // file in /public
    github: "https://github.com/Shahab-Zada/EcomWeb",
  },
  {
    title: "Final Year Project Management System",
    image: "/Fyp.png",
    github: "https://github.com/Shahab-Zada/Management",
  },
  {
    title: "Rajee Marketplace",
    image: "/Rajee.png",
    github: "https://github.com/Shahab-Zada/EcomWeb",
  },
  {
    title: "BrandRaize Software Company Website",
    image: "/project1.png",
    github: "https://brandraize.com",
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
        <motion.h1
          className="text-center text-light fw-bold mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          My Projects
        </motion.h1>

        <div className="row">
          {projects.map((proj, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <motion.div
                className="project-card p-3 rounded"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                {/* Image Scroll */}
                <div className="img-container">
                  <img src={proj.image} alt={proj.title} />
                </div>

                <h5 className="text-light mt-3">{proj.title}</h5>

                <button
                  className="btn btn-outline-light mt-2"
                  onClick={() => window.open(proj.github, "_blank")}
                >
                  <FaGithub className="me-2" />
                  View Code
                </button>
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