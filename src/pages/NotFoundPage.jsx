import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/1920x1080?technology')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg relative z-10 animate-fade-in-down">
        {/* Error Code */}
        <div className="text-9xl font-extrabold text-sky-600 mb-4 animate-bounce">404</div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Oops! Page Not Found</h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for seems to have taken a detour. Don't worry, we'll help you find your way back.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-sky-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-sky-700 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
