"use client";

import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" },
  
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top modern-navbar">
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* Logo */}
          <span>
            <h1 className="text-light fw-bold m-0">Portfolio</h1>
          </span>

          {/* Toggle Button - only visible on small screens */}
          <button
            className={`navbar-toggler custom-toggler d-lg-none ${isOpen ? "open" : ""}`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={closeMenu}
                    className="text-light nav-link beautiful-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .modern-navbar {
          background: rgba(13, 27, 42, 0.8);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1rem;
        }

        .beautiful-link {
          color: #ffffff;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .beautiful-link:hover,
        .beautiful-link.active {
          color: #ffd700;
        }

        .beautiful-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #ffd700;
          transition: width 0.3s ease;
        }

        .beautiful-link:hover::after,
        .beautiful-link.active::after {
          width: 100%;
        }

        /* Custom Toggler */
        .custom-toggler {
          width: 35px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: none;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 5px;
          transition: background 0.3s ease;
        }

        .custom-toggler span {
          display: block;
          height: 3px;
          width: 100%;
          background: #ffffff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .custom-toggler.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .custom-toggler.open span:nth-child(2) {
          opacity: 0;
        }
        .custom-toggler.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .custom-toggler.open {
          background: rgba(13, 27, 42, 1);
        }

        @media (max-width: 991px) {
          .navbar-nav {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}