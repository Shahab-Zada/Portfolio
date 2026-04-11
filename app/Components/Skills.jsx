"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  FaNetworkWired,
  FaServer,
  FaGithub,
  FaCloud,
  FaKey,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNetlify,
  SiRender,
  SiVercel,
} from "react-icons/si";

export default function Skills() {
  const canvasRef = useRef(null);

  // 🌌 Star background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 400);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 400;
    });

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5;
      }

      update() {
        this.y += this.speed;
        if (this.y > height) {
          this.y = 0;
          this.x = Math.random() * width;
        }
      }

      draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars = Array.from({ length: 120 }, () => new Star());

    function animate() {
      ctx.fillStyle = "#0d1b2a";
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const skills = [
    { name: "Networking", icon: <FaNetworkWired size={40} /> },
    { name: "Routing", icon: <FaServer size={40} /> },
    { name: "Switching", icon: <FaServer size={40} /> },
    { name: "HTML5", icon: <SiHtml5 size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
    { name: "JavaScript", icon: <FaJs size={40} /> },
    { name: "React.js", icon: <SiReact size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Firebase", icon: <SiFirebase size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
    { name: "Git", icon: <FaGithub size={40} /> },
    { name: "Netlify", icon: <SiNetlify size={40} /> },
    { name: "Render", icon: <SiRender size={40} /> },
    { name: "Vercel", icon: <SiVercel size={40} /> },
    { name: "Cloudinary", icon: <FaCloud size={40} /> },
    { name: "RBAC", icon: <FaKey size={40} /> },
  ];

  return (
    <section id="skills" className="position-relative py-5">
      {/* 🌌 Canvas Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
     <h1 className="text-center text-primary mb-3 fw-bold">
  My Skills
</h1>

<p className="text-center text-light mb-5" style={{ maxWidth: "600px", margin: "0 auto" }}>
  From frontend to backend, these are the technologies I use to craft seamless digital experiences.
</p>

        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
              }}
            >
              <motion.div
                className="skill-card text-center p-4"
                whileHover={{
                  scale: 1.1,
                  y: -10,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <div className="icon mb-3 text-light">
                  {skill.icon}
                </div>
                <p className="text-light small mb-0">
                  {skill.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
        }
      `}</style>
    </section>
  );
}