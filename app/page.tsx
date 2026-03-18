"use client";
import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Hero from './Components/Hero'

export default function Home() {
  return (
    <>
  
      <Navbar />

      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}