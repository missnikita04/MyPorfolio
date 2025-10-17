import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/user/Submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        toast.success("✅ Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      alert("Server error: " + err.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact"
      className="p-20 bg-gray-50 min-h-screen flex items-center justify-center"
    >
      <div className="bg-white shadow-lg rounded-2xl max-w-2xl w-full p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Get In <span className="text-teal-600">Touch</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
            required
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-teal-500  focus:outline-none focus:border-teal-600 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
               required
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-teal-500  focus:outline-none focus:border-teal-600 transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
                 required
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-teal-500  focus:outline-none focus:border-teal-600 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              rows="5"
              name="message"
                 required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-teal-500  focus:outline-none focus:border-teal-600 transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-3 px-6 py-2 !text-white !bg-teal-600 !rounded-lg !font-medium !border-2 !border-transparent hover:!bg-white hover:!border-teal-500 hover:!text-gray-800 !transition-colors !duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
