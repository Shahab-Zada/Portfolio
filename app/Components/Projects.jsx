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
    text: "Full-stack e-commerce application with role-based authentication, admin dashboard, and optimized product management system for smooth user experience."
  },
  {
    title: "Final Year Project Management System",
    image: "/Fyp.png",
    github: "https://github.com/Shahab-Zada/Management",
    live: "https://awkumtech.awkum.edu.pk/",
    text: "University final year project system with Google Drive integration, role-based access control, and automated project evaluation and tracking system."
  },
  {
    title: "Rajee Marketplace",
    image: "/Rajee.png",
    github: "https://github.com/Shahab-Zada/Rajee",
    live: "",
    text: "Bilingual (Arabic & English) marketplace platform with secure authentication, product listings, messaging system, and full admin control panel."
  },
  {
    title: "BrandRaize Software Company Website",
    image: "/project1.png",
    github: "",
    live: "https://brandraize.com",
    text: "Corporate website with modern UI, responsive design, and dynamic content management system for showcasing services and company profile."
  },
];

export default function Projects() {
  const canvasRef = useRef(null);

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
      <canvas
        ref={canvasRef}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.h1
          className="text-center fw-bold mb-3 text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          My Projects
        </motion.h1>

        <p
          className="text-center text-light mb-5"
          style={{ maxWidth: "650px", margin: "0 auto", opacity: 0.8 }}
        >
          Here are some of the projects I’ve worked on, showcasing my skills in
          building modern, scalable, and user-friendly applications.
        </p>

        <div className="row">
          {projects.map((proj, i) => (
            <div className="col-md-6 col-lg-3 mb-4" key={i}>
              <motion.div
                className="project-card p-3 rounded h-100"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                {/* Image */}
                <div className="img-container">
                  <img src={proj.image} alt={proj.title} />
                </div>

                {/* Title */}
                <h5 className="text-light mt-3 fs-6 fw-bold">
                  {proj.title}
                </h5>

                {/* Description (NEW TEXT ADDED) */}
                <p className="text-light small opacity-75">
                  {proj.text}
                </p>

                {/* Buttons */}
                <div className="d-flex gap-2 mt-2 flex-wrap">
                  {proj.github && (
                    <button
                      className="btn btn-outline-light btn-sm"
                      onClick={() => window.open(proj.github, "_blank")}
                    >
                      <FaGithub className="me-1" />
                      GitHub
                    </button>
                  )}

                  {proj.live && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => window.open(proj.live, "_blank")}
                    >
                      <FaExternalLinkAlt className="me-1" />
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
          height: 280px;
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