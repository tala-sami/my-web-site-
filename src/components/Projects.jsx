
import React from 'react';

function Projects() {
  return (
    <section className="bg-gray-200 py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Car Rental Website</h3>
          <p className="mb-2">A React-based website for booking rental cars.</p>
          <a href="https://github.com/tala-sami/car-rental" className="text-indigo-600 underline">View Code</a>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
}

export default Projects;
