import React, { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for signing up with: ${email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded shadow max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-4">Sign Up</h2>
      <label className="block text-gray-700 mb-2">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded mb-4"
      />
      <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
