import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-lg mb-6 text-gray-700">
        Explore, connect, and enjoy the experience.
      </p>
      <div className="flex gap-4">
        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Login
        </Link>
        <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
