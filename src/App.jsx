
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
