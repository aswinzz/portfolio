"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:aswinvb.aswin6@gmail.com?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
      />
      <textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg h-32 focus:outline-none focus:border-blue-600"
      />
      <button 
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
} 