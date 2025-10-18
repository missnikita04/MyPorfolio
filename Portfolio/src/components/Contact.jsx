import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://myporfolio-amzm.onrender.com/api/user/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.success) {
        toast.success("✅ Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ " + result.message, { position: "top-center" });
      }
    } catch (err) {
      toast.error("Server error: " + err.message, { position: "top-center" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact"
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-xl p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Get In <span className="text-teal-600">Touch</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-medium mb-2 capitalize">
                {field}
              </label>
              <input
                required
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border-b-2 border-teal-500 border-t-0 border-l-0 border-r-0 bg-transparent focus:outline-none focus:border-teal-600 transition py-2"
              />
            </div>
          ))}

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-2 border-teal-500 border-t-0 border-l-0 border-r-0 bg-transparent focus:outline-none focus:border-teal-600 transition py-2 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-3 px-6 py-2 !text-white !bg-teal-600 rounded-lg font-medium border-2 border-transparent hover:!bg-white hover:!border-teal-500 hover:!text-gray-800 !transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </motion.div>
  );
}
