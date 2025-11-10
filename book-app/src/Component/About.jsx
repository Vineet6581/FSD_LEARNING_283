import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>

      <p className="text-lg text-gray-700 max-w-2xl leading-relaxed mb-6">
        Welcome to <span className="font-semibold text-blue-600">Our Application</span> — a platform designed to make your journey smoother and smarter.
        We believe in innovation, simplicity, and creating a seamless user experience.
        Our mission is to empower users with tools that help them achieve their goals effectively.
      </p>

      <div className="bg-white rounded-2xl shadow-md p-6 max-w-lg mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Vision 🌟</h2>
        <p className="text-gray-600 leading-relaxed">
          We aim to build technology that connects people, ideas, and opportunities.
          Every feature we design is meant to make your online experience faster, safer, and more personal.
        </p>
      </div>

      <div className="flex gap-4">
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go Home
        </Link>
        <Link to="/login" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
          Login
        </Link>
      </div>
    </div>
  );
};

export default About;
