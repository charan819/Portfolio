// import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { useDarkMode } from "../mode/DarkMode";

const Projects = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(true);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  // const projectList = [
  //   {
  //     id: 1,
  //     name: "Personal Goal Tracker (Jira Clone)",
  //     description: "Jira-style full-stack task manager with real-time collaboration and drag-and-drop workflows.",
  //     githubLink: "https://github.com/charan819/my-taskly",
  //     tech: ["React", "Node.js", "Java", "Spring Boot"]
  //   },
  //   {
  //     id: 2,
  //     name: "Medicine Prescription Tracker",
  //     description: "Cross-platform app for medication tracking, reminders, and multilingual support.",
  //     // githubLink: "https://github.com/charan819/medicine-tracker",
  //     tech: ["Python", "Flask", "HTML", "CSS", "Chart.js"]
  //   },
  //   {
  //     id: 3,
  //     name: "Travel Journal App (MERN)",
  //     description: "Rich-text journaling platform with Cloudinary image uploads and secure login.",
  //     githubLink: "https://github.com/charan819/travel-journal-app",
  //     tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"]
  //   },
  //   {
  //     id: 4,
  //     name: "Live Script Compiler",
  //     description: "Responsive web-based code editor with real-time preview, supporting HTML/CSS/JS and Ace Editor.",
  //     githubLink: "https://github.com/charan819/live-script-compiler",
  //     tech: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Ace Editor"]
  //   },
  //   {
  //     id: 5,
  //     name: "Task Manager Web App",
  //     description: "Kanban-style task manager with real-time Firebase sync, drag-and-drop UI, and productivity dashboard.",
  //     githubLink: "https://github.com/charan819/task-manager-app",
  //     tech: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"]
  //   },
  //   {
  //     id: 6,
  //     name: "Image Cartoonification",
  //     description: "CNN-based deep learning model for cartoonifying images using Flask backend.",
  //     // githubLink: "https://github.com/charan819/image-cartoonification",
  //     tech: ["CNN", "Flask", "TensorFlow", "Keras"]
  //   }
  // ];
//   const projectList = [
//   {
//     id: 1,
//     name: "Personal Goal Tracker (Jira Clone)",
//     description: [
//       "• Full-stack Jira-style task manager that increased productivity by 35%.",
//       "• Customizable workflows, 5 status categories, and dependency tracking for 50+ concurrent tasks.",
//       "• Drag-and-drop interface with 8 column types and 3 dashboard views.",
//       "• Collaboration for 10+ users, comment threads, file uploads (20MB), and revision history tracking."
//     ].join("\n"),
//     githubLink: "https://github.com/charan819/my-taskly",
//     tech: ["React", "Node.js", "Java", "Spring Boot"]
//   },
//   {
//     id: 2,
//     name: "Medicine Prescription Tracker",
//     description: [
//       "• Cross-platform healthcare management system with 98% data reliability.",
//       "• Tracks medications and 10+ health metrics across devices.",
//       "• Smart reminders delivering 1000+ monthly notifications via SMS, email, and push.",
//       "• AI-driven health insights, multilingual support (5+ languages), and emergency features."
//     ].join("\n"),
//     // githubLink: "https://github.com/charan819/medicine-tracker",
//     tech: ["Python", "Flask", "HTML", "CSS", "Chart.js"]
//   },
//   {
//     id: 3,
//     name: "Travel Journal App (MERN)",
//     description: [
//       "• Rich-text journaling platform for logging travel experiences.",
//       "• Cloudinary-based image upload support and secure login system.",
//       "• Responsive UI with persistent storage using MongoDB."
//     ].join("\n"),
//     githubLink: "https://github.com/charan819/travel-journal-app",
//     tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"]
//   },
//   {
//     id: 4,
//     name: "Live Script Compiler",
//     description: [
//       "• Real-time web code editor for HTML/CSS/JS with 100ms live preview.",
//       "• Ace Editor integration with 15+ syntax themes and theme toggle feature.",
//       "• Optimized asset delivery reduced load time by 60% across 6 major browsers."
//     ].join("\n"),
//     githubLink: "https://github.com/charan819/live-script-compiler",
//     tech: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Ace Editor"]
//   },
//   {
//     id: 5,
//     name: "Task Manager Web App",
//     description: [
//       "• Kanban-style task manager with Firebase-powered real-time sync.",
//       "• Handles 200+ tasks with drag-and-drop UI and 3 user roles.",
//       "• Productivity dashboard visualizing 12 key metrics improved completion by 25%."
//     ].join("\n"),
//     githubLink: "https://github.com/charan819/task-manager-app",
//     tech: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"]
//   },
//   {
//     id: 6,
//     name: "Image Cartoonification",
//     description: [
//       "• CNN-based model that converts high-resolution images into 40+ cartoon styles.",
//       "• Flask backend processes 30+ requests concurrently with 850ms response time.",
//       "• Offers 5 neural style transfer techniques and supports 4K resolution conversion."
//     ].join("\n"),
//     // githubLink: "https://github.com/charan819/image-cartoonification",
//     tech: ["CNN", "Flask", "TensorFlow", "Keras"]
//   }
// ];

const projectList = [
  {
    id: 1,
    name: "Personal Goal Tracker (Jira Clone)",
    description:
      "Full-stack Jira-inspired task manager that increased productivity by 35%, with customizable workflows, task prioritization across 5 status categories, and dependency management for 50+ tasks. Features include an intuitive drag-and-drop interface with 8 customizable columns, 3 dashboard views, and real-time collaboration for 10+ users with comment threads, file attachments (20MB), and version history of 30+ revisions.",
    githubLink: "https://github.com/charan819/my-taskly",
    tech: ["React", "Node.js", "Java", "Spring Boot"]
  },
  {
    id: 2,
    name: "Medicine Prescription Tracker",
    description:
      "Cross-platform healthcare system for tracking medications and 10+ health metrics across devices with 98% data reliability. Includes smart reminders delivering 1000+ monthly notifications (SMS, email, push), AI-driven health insights, multilingual support (5+ languages), and emergency services, improving user engagement by 35% over 2 months.",
    // githubLink: "https://github.com/charan819/medicine-tracker",
    tech: ["Python", "Flask", "HTML", "CSS", "Chart.js"]
  },
  {
    id: 3,
    name: "Travel Journal App (MERN)",
    description:
      "Rich-text journaling platform enabling travel logging with Cloudinary-based image uploads, secure authentication, and smooth UX across devices.",
    githubLink: "https://github.com/charan819/travel-journal-app",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"]
  },
  {
    id: 4,
    name: "Live Script Compiler",
    description:
      "Real-time web code editor for HTML/CSS/JS with 100ms live preview. Integrated Ace Editor with 15+ syntax themes and 8 productivity features, including a theme toggle. Achieved 98% cross-browser compatibility and 60% faster load times via asset optimization and code splitting.",
    githubLink: "https://github.com/charan819/live-script-compiler",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Ace Editor"]
  },
  {
    id: 5,
    name: "Task Manager Web App",
    description:
      "Kanban-style task manager handling 200+ tasks with 99.5% data persistence via Firebase. Includes drag-and-drop interface, 3 permission levels, and a dashboard visualizing 12 productivity metrics that improved task completion by 25%.",
    githubLink: "https://github.com/charan819/task-manager-app",
    tech: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"]
  },
  {
    id: 6,
    name: "Image Cartoonification",
    description:
      "CNN-based deep learning app that transforms high-resolution images into 40+ cartoon styles. Flask backend handles 30+ concurrent requests with 850ms average response time. Includes 5 neural style transfer options boosting engagement by 65%.",
     githubLink: "https://github.com/charan819/image_cartoonifier",
    tech: ["CNN", "Flask", "TensorFlow", "Keras"]
  },
  {
  id: 7,
  name: "Address Book App (MEAN)",
  description:
    "Full-stack web application for managing personal contacts. Built with Angular frontend and Node.js, Express, and MongoDB backend. Features secure JWT authentication, responsive UI, and token-protected RESTful APIs.",
   githubLink: "https://github.com/charan819/address_book",
  tech: ["Angular", "Node.js", "Express", "MongoDB", "JWT"]
}
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

      <main className="pt-24 pb-14">
        <div className="max-w-3xl mx-auto px-4  space-y-16">
          {/* Header */}
          <motion.div
            className="text-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold tracking-wider" variants={itemVariants}>
              {Array.from("PROJECTS").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block hover:text-accent-purple cursor-default"
                  whileHover={{ scale: 1.2, rotate: [-5, 5, 0], transition: { duration: 0.3 } }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p className="text-neutral-600 dark:text-neutral-400" variants={itemVariants}>
              Here are a few recent projects I've worked on
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectList.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="group bg-white dark:bg-primary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-accent-purple/10"
              >
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <motion.h3 className="text-xl font-bold group-hover:text-accent-purple transition-colors" layout>
                      {project.name}
                    </motion.h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {project.description}
                    </p>
                  </div>

                  <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 * index }}>
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div className="flex gap-3 pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 * index }}>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-200 dark:bg-primary-700 hover:bg-accent-purple hover:text-white transition-all duration-300 text-sm font-medium"
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
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-200 dark:bg-primary-700 hover:bg-accent-purple hover:text-white transition-all duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        Demo
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
