// import React, { useState } from "react";
import { Mail, MapPin, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation.jsx";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useDarkMode } from "../mode/DarkMode.jsx";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(true);

  const contactMethods = [
  {
    icon: MapPin,
    title: "Location",
    content: "Tampa, Florida",
    type: "text",
  },
  {
    icon: Mail,
    title: "Email",
    content: "saicharanchandra0@gmail.com",
    href: "mailto:saicharanchandra0@gmail.com",
  },
  {
    icon: SiLinkedin,
    title: "LinkedIn",
    content: "Connect with me",
    href: "https://www.linkedin.com/in/charan-ch",
  },
  {
    icon: SiGithub,
    title: "GitHub",
    content: "Check out my repositories",
    href: "https://github.com/charan819",
  },
  {
    icon: Code2,
    title: "LeetCode",
    content: "View my solutions",
    href: "https://leetcode.com/charanvss2114/",
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-primary-900 text-neutral-800 dark:text-neutral-100 transition-colors duration-300">
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="pt-24">
        <div className="max-w-3xl mx-auto px-4  pb-14 space-y-16">
          {/* Header */}
          <motion.div
            className="text-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              variants={itemVariants}
            >
              Let’s Connect !!!!
            </motion.h1>
            <motion.p
              className="text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto"
              variants={itemVariants}
            >
              Open to new projects, collaborations, or opportunities. Whether it's a quick question or a big idea, I'm just a message away.
            </motion.p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white dark:bg-primary-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-accent-purple/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent-purple/10 group-hover:bg-accent-purple/20">
                        <method.icon className="text-accent-purple" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {method.content}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white dark:bg-primary-800 rounded-2xl p-6 shadow-lg group-hover:shadow-xl group-hover:shadow-accent-purple/10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent-purple/10 group-hover:bg-accent-purple/20">
                        <method.icon className="text-accent-purple" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {method.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

              {/* Contact Form */}
<motion.div className="bg-white dark:bg-primary-800 rounded-2xl p-6 shadow-lg mt-10">
  <h2 className="text-xl font-bold mb-4 text-accent-purple">Send a Message</h2>
  <form
    onSubmit={(e) => {
      e.preventDefault();
      if (!e.target.name.value || !e.target.email.value || !e.target.message.value) {
        alert("Please fill all fields");
        return;
      }

emailjs.sendForm(
  process.env.REACT_APP_PORTFOLIO_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_PORTFOLIO_EMAILJS_TEMPLATE_ID,
  e.target,
  process.env.REACT_APP_PORTFOLIO_EMAILJS_PUBLIC_KEY
      ).then(
          () => {
            alert("Message sent successfully!");
            e.target.reset();
          },
          (error) => {
            alert("Failed to send message. Try again later.");
            console.error(error);
          }
        );
    }}
    className="space-y-4"
  >
    <input type="hidden" name="subject" value="Contact Form Submission" />
    <div>
      <label className="block text-sm font-medium mb-1">Your Name</label>
      <input
        type="text"
        name="name"
        required
        className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-primary-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-purple"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Your Email</label>
      <input
        type="email"
        name="email"
        required
        className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-primary-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-purple"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Message</label>
      <textarea
        name="message"
        rows="4"
        required
        className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-primary-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-purple"
      />
    </div>
    <button
      type="submit"
      className="px-6 py-2 rounded-xl bg-accent-purple text-white hover:bg-accent-purple/90 transition-colors"
    >
      Send Message
    </button>
  </form>
</motion.div>


      </main>
    </div>
  );
};

export default Contact;
