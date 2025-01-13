import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. We'll get back to you soon.`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded shadow max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
      <label className="block text-gray-700 mb-2">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block text-gray-700 mb-2">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block text-gray-700 mb-2">Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded mb-4"
      />
      <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
