import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, FileText, ExternalLink } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import profileImg from "../profile/profile.JPG";
import { useDarkMode } from "../mode/DarkMode";
import SkillsSection from "../components/Skills";
import Experience from "../components/Experience";



const projectList = [
  {
    id: 1,
    name: "Personal Goal Tracker (Jira Clone)",
    description: "Jira-style full-stack task manager with real-time collaboration and drag-and-drop workflows.",
    githubLink: "https://github.com/charan819/my-taskly",
    tech: ["React", "Node.js", "Java", "Spring Boot"]
  },
  {
    id: 2,
    name: "Medicine Prescription Tracker",
    description: "Cross-platform app for medication tracking, reminders, and multilingual support.",
    // githubLink: "https://github.com/charan819/medicine-tracker",
    tech: ["Python", "Flask", "HTML", "CSS", "Chart.js"]
  },
  {
    id: 3,
    name: "Travel Journal App (MERN)",
    description: "Rich-text journaling platform with Cloudinary image uploads and secure login.",
    githubLink: "https://github.com/charan819/travel-journal-app",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"]
  },
  // {
  //   id: 4,
  //   name: "Live Script Compiler",
  //   description: "Responsive web-based code editor with real-time preview, supporting HTML/CSS/JS and Ace Editor.",
  //   githubLink: "https://github.com/charan819/live-script-compiler",
  //   tech: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Ace Editor"]
  // },
  // {
  //   id: 5,
  //   name: "Task Manager Web App",
  //   description: "Kanban-style task manager with real-time Firebase sync, drag-and-drop UI, and productivity dashboard.",
  //   githubLink: "https://github.com/charan819/task-manager-app",
  //   tech: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"]
  // },
  // {
  //   id: 6,
  //   name: "Image Cartoonification",
  //   description: "CNN-based deep learning model for cartoonifying images using Flask backend.",
  //  // githubLink: "https://github.com/charan819/image-cartoonification",
  //   tech: ["CNN", "Flask", "TensorFlow", "Keras"]
  // }
];

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-primary-900 text-neutral-800 dark:text-neutral-100 transition-colors duration-300">
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="pt-24 pb-14">
        <div className="max-w-3xl mx-auto px-4 space-y-16">
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={stagger}
            className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center"
          >
            <motion.div className="md:col-span-7 space-y-6" variants={fadeIn}>
              <motion.div className="space-y-2" variants={stagger}>
                <motion.h2
                  variants={fadeIn}
                  className="text-accent-purple text-lg font-medium"
                >

                  Full Stack Developer | JAVA
                </motion.h2>
                <motion.h1
                  variants={fadeIn}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Sai Charan Chandra
                </motion.h1>
                <motion.div
                  variants={fadeIn}
                  className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
                >
                  <MapPin size={18} className="text-accent-purple" />
                  <span>Based in Tampa, Florida</span>
                </motion.div>
                <motion.p
                  variants={fadeIn}
                  className="text-neutral-600 dark:text-neutral-400 max-w-md pt-2"
                >
                  Actively looking for opportunities, Lets Connect ! <br />

                  Full Stack Developer skilled in Spring Boot, React, and AWS. Passionate about building impactful web applications and learning continuously.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <motion.a
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="group-hover:rotate-12 transition-transform" size={18} />
                  <span>Resume</span>
                </motion.a>
                <div className="flex gap-2">
                  {[{
                    Icon: SiLinkedin,
                    href: "https://linkedin.com/in/charan-ch",
                    label: "LinkedIn"
                  }, {
                    Icon: SiGithub,
                    href: "https://github.com/charan819",
                    label: "GitHub"
                  }, {
                    Icon: Mail,
                    href: "mailto:saicharanchandra0@gmail.com",
                    label: "Email"
                  }].map(({ Icon, href, label }, index) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-icon hover:shadow-lg"
                      variants={fadeIn}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:col-span-5"
              variants={fadeIn}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden ring-4 ring-accent-purple/20 mx-auto relative z-10">
                  <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-accent-purple/10 w-32 h-32 md:w-48 md:h-48 rounded-2xl"
                  animate={{ scale: [1, 1.05, 1], rotate: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Experience />
          </motion.div>

          {/* Skills Section */}
          <SkillsSection />

          {/* Featured Projects Section */}
          <motion.section
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <h2 className="text-2xl font-bold text-accent-purple">Featured Projects</h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/projects" className="group flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent-purple transition-colors">
                  View all projects
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </div>

            <motion.div className="space-y-6" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {projectList.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        delay: index * 0.2
                      }
                    }
                  }}
                  className="group bg-white dark:bg-primary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-accent-purple/10"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-accent-purple transition-colors">{project.name}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-200 dark:bg-primary-700 hover:bg-accent-purple hover:text-white transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <SiGithub size={18} />
                        GitHub
                      </motion.a>
                      {project.websiteLink && (
                        <motion.a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-200 dark:bg-primary-700 hover:bg-accent-purple hover:text-white transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Home;
