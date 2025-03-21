import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xzgs5vk", // Replace with your actual Service ID
        "template_5ob59ol", // Replace with your actual Template ID
        formData,
        "CQIzSTEgIMg6OUOki" // Replace with your actual Public Key
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          console.log("Success:", response);
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          alert("Failed to send email.");
          console.log("Error:", error);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transform hover:scale-105 transition duration-300"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-300 shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default EmailForm;
