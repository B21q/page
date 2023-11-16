'use client';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <section className="">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
