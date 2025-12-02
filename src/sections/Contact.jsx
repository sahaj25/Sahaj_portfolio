import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import astronaut from "../assets/contact.png"; // <-- your astronaut image

const Contact = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORM_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for reaching out. We will get back to you soon.");
        e.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <ParticlesBackground />

      {/* LEFT — ASTRONAUT IMAGE */}
      <motion.img
        src={astronaut}
        alt="astronaut"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[300px] md:w-[420px] z-10"
      />

      {/* RIGHT — CONTACT FORM */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#111]/70 backdrop-blur-xl border border-white/10 p-10 rounded-2xl w-full max-w-xl z-10"
      >
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5">
          {/* Name */}
          <div>
            <p className="font-medium mb-2">Your Name *</p>
            <input
              type="text"
              required
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <p className="font-medium mb-2">Your Email *</p>
            <input
              type="email"
              required
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 outline-none"
            />
          </div>

          {/* Service */}
          <div>
            <p className="font-medium mb-2">Service Needed *</p>
            <select
              name="service"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 outline-none"
            >
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Full-Stack Development</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <p className="font-medium mb-2">Your Budget *</p>
            <input
              type="number"
              name="budget"
              placeholder="Your Budget"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <p className="font-medium mb-2">Explain Your Idea *</p>
            <textarea
              rows={5}
              name="message"
              placeholder="Explain your idea..."
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
