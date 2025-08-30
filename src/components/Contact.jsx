import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

 const Dialog = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
             Thank You!
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {message}
          </p>
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            OK
          </button>
        </div>
      </motion.div>
    </div>
  );
};

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,   // Your Service ID
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,  // Your Template ID
        {
          name: form.name,          // matches {{name}} in EmailJS template
          email: form.email,        // matches {{email}}
          message: form.message,    // matches {{message}}
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY    // Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setDialogMessage("Thank you for reaching out! Ahtesham will reply to you soon.");
          setShowDialog(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setDialogMessage("Something went wrong. Please try again.");
          setShowDialog(true);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText} style={{color:"red"}}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none"
            />
          </label>

          {/* Email Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none"
            />
          </label>

          {/* Message Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-white hover:text-black transition-colors"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Dialog */}
      {showDialog && (
        <Dialog
          message={dialogMessage}
          onClose={() => setShowDialog(false)}
        />
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
