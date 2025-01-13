import React from "react";
import SignupForm from "../components/SignUpForm";

const LandingPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Join Our Platform
        </h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Sign up to discover how our product can enhance your business.
        </p>
        <SignupForm />
      </div>
    </div>
  );
};

export default LandingPage;
