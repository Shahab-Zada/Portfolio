"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { 
  FaNetworkWired, FaServer, FaGithub, FaCloud, FaKey,  FaJs, FaBootstrap 
} from "react-icons/fa";
import { 
  SiHtml5, SiTailwindcss,  SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiMongodb, SiFirebase, SiNetlify, SiRender, SiVercel,
} from "react-icons/si";
export default function Skills() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 300;

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 300;
    });

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
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }
      draw() {
        ctx.fillStyle = "#add8e6"; // White particles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesArray = [];
    const numberOfParticles = 100;
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particlesArray.forEach(p => {
        p.move();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const skills = [
    { name: "Networking", icon: <FaNetworkWired size={40} color="#fff" /> },
    { name: "Routing", icon: <FaServer size={40} color="#fff" /> },
    { name: "Switching", icon: <FaServer size={40} color="#fff" /> },
    { name: "HTML5", icon: <SiHtml5 size={40} color="#fff" /> },
   
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#fff" /> },
  
    { name: "Bootstrap", icon: <FaBootstrap size={40} color="#fff" /> },
    { name: "JavaScript", icon: <FaJs size={40} color="#fff" /> },
    { name: "React.js", icon: <SiReact size={40} color="#fff" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} color="#fff" /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} color="#fff" /> },
    { name: "Express.js", icon: <SiExpress size={40} color="#fff" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#fff" /> },
    { name: "Firebase", icon: <SiFirebase size={40} color="#fff" /> },
    { name: "GitHub", icon: <FaGithub size={40} color="#fff" /> },
    { name: "Git", icon: <FaGithub size={40} color="#fff" /> },
    { name: "Netlify", icon: <SiNetlify size={40} color="#fff" /> },
    { name: "Render", icon: <SiRender size={40} color="#fff" /> },
    { name: "Vercel", icon: <SiVercel size={40} color="#fff" /> },
   
 
    
    { name: "Cloudinary", icon: <FaCloud size={40} color="#fff" /> },

    { name: "Role Based Access", icon: <FaKey size={40} color="#fff" /> },
  ];

  return (
    <section id="skills" className="position-relative py-5">
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
        <h2 className="text-center text-primary mb-4 fw-bold">My Skills</h2>

        <div className="marquee-wrapper overflow-hidden">
          <motion.div
            className="d-flex gap-4 marquee"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="skill-card text-center p-3">
                <div className="icon mb-2">{skill.icon}</div>
                <p className="text-light">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          white-space: nowrap;
        }

        .marquee {
          display: inline-flex;
        }

        .skill-card {
          min-width: 120px;
          max-width: 150px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .skill-card:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}