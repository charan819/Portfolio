import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Building2,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
} from "lucide-react";

const ExperienceCard = ({
  role,
  company,
  date,
  location,
  description,
  skills,
  link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowLink = link && link !== "#"; // Helper function to determine if link should be shown

  return (
    <motion.div
      layout
      className="relative rounded-2xl bg-white dark:bg-primary-800 overflow-hidden"
    >
      <motion.div layout="position" className="p-4 sm:p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 min-w-0">
            <motion.h3
              layout="position"
              className="text-base sm:text-lg font-semibold truncate"
            >
              {role}
            </motion.h3>
            <div className="flex items-center gap-2 text-sm text-accent-purple">
              <Building2 size={16} className="flex-shrink-0" />
              <span className="truncate">
                {shouldShowLink ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">{company}</a>
                ) : (
                  <span>{company}</span>
                )}
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-primary-700 rounded-xl flex-shrink-0"
          >
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <Calendar size={14} className="flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} className="flex-shrink-0" />
            <span>{location}</span>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 pt-4"
            >
              <div className="space-y-2">
                {/* <h4 className="font-medium">Responsibilities & Achievements</h4> */}
                <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {description.map((item, index) => (
                    <li key={index} className="leading-relaxed">
                      <span className="pl-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {shouldShowLink && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent-purple hover:text-accent-violet"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn more</span>
                  <ExternalLink size={14} />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-purple/20">
        <motion.div
          className="w-full bg-accent-purple"
          animate={{ height: isExpanded ? "100%" : "30%" }}
        />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const experienceData = {
    work: [
  {
    role: "Software Engineering Intern",
    company: "BlueJeans",
    date: "Jan 2022 – Dec 2022",
    location: "Bangalore, India",
    description: [
      "Built 30+ RESTful APIs and achieved 98% test coverage using Spring and PostgreSQL.",
      "Optimized analytics processing of 1000+ traceroutes daily with 99.9% reliability.",
      "Implemented generic filter wrapper using Spring Data JPA, cutting query time by 35%.",
      "Deployed distributed tracing across 6 microservices, reducing debug time by 40%."
    ],
    skills: ["Java", "Spring", "Spring Boot", "PostgreSQL", "RESTAPIs", "Kafka"],
    link: "https://www.linkedin.com/company/bluejeans-by-verizon/"
  }
],
    education: [
  {
    role: "Master of Science in Computer Science",
    company: "University of South Florida",
    date: "Aug 2023 – May 2025",
    location: "Tampa, FL",
    description: [
      "GPA: 3.91"
    ],
    skills: ["Java", "Cloud", "ML", "Databases"],
    link: "https://www.usf.edu/"
  },
  {
    role: "Bachelor of Technology in Computer Science",
    company: "CVR College of Engineering",
    date: "Aug 2019 – May 2023",
    location: "Hyderabad, India",
    description: [
      "GPA: 3.36",
    ],
    skills: ["Java", "Python", "DSA"],
    link: "https://www.cvr.ac.in/"
  }
],
    certifications: [
  {
    role: "Amazon Junior Software Developer",
    company: "Amazon",
    date: "April 2025",
    location: "Online",
    description: [
      "Completed Amazon's program for Junior Developers by CourseEra.",
      "Covered cloud development principles, debugging, and software lifecycle management."
    ],
    skills: ["Java", "Cloud", "Development", "Debugging", "DataStructures"],
    link: "https://www.amazon.jobs/en/landing_pages/skills-certification"
  },
  {
    role: "Certified Amazon Cloud Practitioner",
    company: "Amazon Web Services",
    date: "March 2025",
    location: "Online",
    description: [
      "Verified foundational cloud knowledge in AWS compute, networking, storage, and database.",
      "Assessed security best practices, billing models, and support tiers."
    ],
    skills: ["AWS", "Cloud", "IAM", "VPC", "EC2", "RDS"],
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    role: "Master Java Programming - Complete Beginner to Advanced",
    company: "GeeksForGeeks",
    date: "November 2023",
    location: "Online",
    description: [
      "Covered Java fundamentals to advanced topics including Collections, Multithreading, and JDBC.",
      "Hands-on assignments and real-world project exercises."
    ],
    skills: ["Java", "JDBC", "OOP", "Multithreading"],
    link: "https://practice.geeksforgeeks.org/courses"
  },
  {
    role: "Cognitive Class - Machine Learning with Python",
    company: "IBM",
    date: "February 2023",
    location: "Online",
    description: [
      "Implemented ML models using Python with libraries like tensorflow and pandas.",
      "Understood regression, classification, clustering, and model evaluation."
    ],
    skills: ["Python", "TensowFlow", "Machine Learning", "Data Science"],
    link: "https://cognitiveclass.ai/courses/machine-learning-with-python"
  },
  {
    role: "Cognitive Class - Data Science 101",
    company: "IBM",
    date: "December 2022",
    location: "Online",
    description: [
      "Explored core concepts of data science, natural language processing, and visualization.",
      "Introduced to basic data tools."
    ],
    skills: ["Data Science", "Python", "NLP"],
    link: "https://cognitiveclass.ai/courses/data-science-hands-open-source-tools-2"
  },
  {
    role: "Database Programming with SQL",
    company: "Oracle",
    date: "May 2022",
    location: "Online",
    description: [
      "Learned SQL fundamentals, joins, subqueries, and stored procedures.",
      "Applied queries to manage and retrieve data in relational databases."
    ],
    skills: ["SQL", "Oracle", "Stored Procedures", "Joins"],
    link: "https://education.oracle.com"
  }
],
  };

  const tabIcons = {
    work: Building2,
    education: GraduationCap,
    certifications: Award,
  };

  return (
    <motion.section className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row w-full border rounded-xl bg-white dark:bg-primary-800 p-1.5 gap-2 sm:gap-0">
        {Object.keys(experienceData).map((tab) => {
          const IconComponent = tabIcons[tab];
          return (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 sm:px-6 py-2.5 rounded-lg font-medium relative sm:border-0 border dark:border-primary-700 ${
                activeTab === tab ? "text-white" : ""
              }`}
            >
              <motion.div
                className="absolute inset-0 rounded-lg bg-accent-purple"
                initial={false}
                animate={{ opacity: activeTab === tab ? 1 : 0 }}
              />
              <span className="relative flex items-center justify-center gap-2">
                <IconComponent size={18} />
                <span className="capitalize">{tab}</span>
              </span>
            </motion.button>
          );
        })}
      </div>

      <motion.div className="space-y-4" layout>
        <AnimatePresence mode="wait">
          {experienceData[activeTab].map((experience, index) => (
            <motion.div
              key={experience.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
