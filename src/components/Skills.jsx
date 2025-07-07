//! ISSUE: cant be fucked to fix: however when clicking the 'Read More', and then moving to a different skill, the animation doesn't reset. 
// TODO: fix this
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FaJava,FaHtml5,FaCss3,FaNodeJs, FaJira } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { 
  SiPython,
  SiReact,
  SiTailwindcss,
  SiFlask,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiSpringboot,
  SiJunit5,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  SiApachekafka,
  SiAngular,
  // SiAmazonec2,
  // SiAmazonecs,
  // SiAmazonaws,
  // SiAmazons3,
  // SiAmazonrds,
  // SiAmazoneiam,
  // SiAmazoncloudwatch,
  // SiAmazonesql,
  // SiAmazonedynamodb


} from 'react-icons/si';
import {
  BsSearch,
  BsCpu,
  BsShieldLock
} from 'react-icons/bs';

// Disaply funny warning if they click the icon 10 times
const WarningPopup = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 z-50"
  >
    <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-lg shadow-lg">
      <p className="text-xs text-center font-medium">
        Stop that! 😭
      </p>
    </div>
  </motion.div>
);

// The roatating icons speeds up depending on the number of clicks.
// ...More clicks = more speed
const RotatingIcon = ({ icon: Icon }) => {
  const [rotateValue, setRotateValue] = useState(0);
  const [duration, setDuration] = useState(2);
  const [showWarning, setShowWarning] = useState(false);
  const clickCountRef = useRef(0);
  const warningTimeoutRef = useRef(null);
  const resetTimeoutRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Clear any existing reset timeout
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    clickCountRef.current += 1;
    setRotateValue(prev => prev + 360);
    
    // Increase duration (slow down) with each click
    setDuration(prev => Math.min(prev + 0.5, 4));

    // Reset duration after 3 seconds
    resetTimeoutRef.current = setTimeout(() => {
      setDuration(2);
    }, 3000);

    // Show warning after 10 clicks
    if (clickCountRef.current >= 10) {
      setShowWarning(true);
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
      warningTimeoutRef.current = setTimeout(() => {
        setShowWarning(false);
        clickCountRef.current = 0;
      }, 2000);
    }
  };

  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: rotateValue }}
        transition={{ 
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        onClick={handleClick}
        className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1 transition-colors"
      >
        <Icon className="w-6 h-6 text-accent-purple" />
      </motion.div>
      <AnimatePresence>
        {showWarning && <WarningPopup />}
      </AnimatePresence>
    </div>
  );
};

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
  const checkTruncation = () => {
    if (textRef.current) {
      const isTruncated = textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsTextTruncated(isTruncated);
    }
  };

  const resizeObserver = new ResizeObserver(checkTruncation);
  const currentTextRef = textRef.current;

  if (currentTextRef) {
    resizeObserver.observe(currentTextRef);
    setTimeout(checkTruncation, 0);
  }

  return () => {
    if (currentTextRef) {
      resizeObserver.unobserve(currentTextRef);
    }
  };
}, [selectedSkill]);


  const skillsData = {
  "Languages": [
    {
      name: "Java",
      color: "bg-red-500",
      icon: FaJava ,
      description: "Backend development and enterprise-grade systems using Spring Boot and JUnit."
    },
    {
      name: "JavaScript",
      color: "bg-yellow-500",
      icon: SiJavascript,
      description: "Core frontend language used with React and Node.js across full-stack projects."
    },
    {
      name: "SQL",
      color: "bg-green-500",
      icon: TbSql,
      description: "Used in PostgreSQL, MySQL, and Oracle for advanced joins, schema design, and stored procedures."
    },
    {
      name: "HTML5 ",
      color: "bg-orange-400",
      icon: FaHtml5,
      description: "Markup and styling for web apps, combined with Tailwind for UI development."
    },
     {name: "CSS3",
      color: "bg-orange-400",
      icon: FaCss3,
      description: "Used alongside HTML and Tailwind for responsive design."
     },
    {
      name: "Python",
      color: "bg-blue-400",
      icon: SiPython,
      description: "Flask APIs, data scripting, and ML workflows (IBM Cognitive Class, AI-powered tools)."
    },
    {
      name: "TypeScript",
      color: "bg-indigo-500",
      icon: SiTypescript,
      description: "Used in typed React and Node projects for better tooling and safer code."
    }
  ],

  // "Frameworks & Libraries": [
  //   {
  //     name: "React.js",
  //     color: "bg-cyan-500",
  //     icon: SiReact,
  //     description: "Component-driven frontend library used in all major frontend projects."
  //   },
  //   {
  //     name: "Redux",
  //     color: "bg-purple-600",
  //     icon: SiRedux ,
  //     description: "Used for global state management in large React applications."
  //   },
  //   {
  //     name: "Spring & Spring Boot",
  //     color: "bg-emerald-600",
  //     icon: BsCpu,
  //     description: "Used for developing scalable microservices and RESTful APIs."
  //   },
  //   {
  //     name: "Node.js & Express.js",
  //     color: "bg-lime-600",
  //     icon: BsCpu,
  //     description: "Built APIs and backend logic for MERN stack and task management apps."
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     color: "bg-fuchsia-600",
  //     icon: SiTailwindcss,
  //     description: "Utility-first styling framework used in this portfolio and several other projects."
  //   },
  //   {
  //     name: "Flask",
  //     color: "bg-gray-600",
  //     icon: SiFlask,
  //     description: "Python-based backend used in Medicine Tracker and lightweight REST APIs."
  //   },
  //   {
  //     name: "JUnit & Mockito",
  //     color: "bg-amber-500",
  //     icon: BsShieldLock,
  //     description: "Core testing stack for Java Spring Boot applications."
  //   }
  // ],
  "Frameworks & Libraries": [
    { name: "React.js", color: "bg-cyan-500", icon: SiReact, description: "Component-driven frontend library used in all major frontend projects." },
    { name: "Redux", color: "bg-purple-600", icon: SiRedux, description: "Used for global state management in large React applications." },
    { name: "Angular", color: "bg-red-600", icon: SiAngular, description: "Used as a framework in MEAN app to get a better understanding "},
    { name: "Spring & Spring Boot", color: "bg-emerald-600", icon: SiSpringboot , description: "Used for developing scalable microservices and RESTful APIs." },
    { name: "Node.js", color: "bg-lime-600", icon: FaNodeJs, description: "Built APIs and backend logic for MERN stack and task management apps." },
    { name: "Express.js", color: "bg-lime-700", icon: FaNodeJs, description: "Backend framework for Node.js projects." },
    { name: "Tailwind CSS", color: "bg-fuchsia-600", icon: SiTailwindcss, description: "Utility-first styling framework used in this portfolio and several other projects." },
    { name: "Flask", color: "bg-gray-600", icon: SiFlask, description: "Python-based backend used in Medicine Tracker and lightweight REST APIs." },
    { name: "JUnit", color: "bg-amber-500", icon: SiJunit5, description: "Unit testing library used with Java Spring Boot." },
    { name: "Mockito", color: "bg-amber-400", icon: SiJunit5, description: "Mocking framework for unit testing in Java." }
  ],

  // "Database & Tools": [
  //   {
  //     name: "MySQL & PostgreSQL",
  //     color: "bg-teal-600",
  //     icon: SiSqlite,
  //     description: "Used across Java and Python projects for transactional data and analytics."
  //   },
  //   {
  //     name: "MongoDB",
  //     color: "bg-green-700",
  //     icon: SiFirebase,
  //     description: "NoSQL database used in MERN stack and Firebase-integrated apps."
  //   },
  //   {
  //     name: "Firebase",
  //     color: "bg-yellow-500",
  //     icon: SiFirebase,
  //     description: "Used for authentication, Firestore DB, storage, and real-time updates."
  //   },
  //   {
  //     name: "Git",
  //     color: "bg-gray-500",
  //     icon: BsCpu,
  //     description: "Version control system used for all solo and team-based projects."
  //   },
  //   {
  //     name: "Docker",
  //     color: "bg-blue-500",
  //     icon: BsCpu,
  //     description: "Containerized apps for local development and CI/CD environments."
  //   },
  //   {
  //     name: "Apache Kafka",
  //     color: "bg-pink-500",
  //     icon: BsSearch,
  //     description: "Used for event-driven data pipelines in scalable systems."
  //   }
  // ],

"Database & Tools": [
    { name: "MySQL", color: "bg-teal-600", icon: SiMysql, description: "Used in Java-based backend projects for relational data storage." },
    { name: "PostgreSQL", color: "bg-teal-500", icon: SiPostgresql, description: "Used in analytics-heavy and scalable systems." },
    { name: "MongoDB", color: "bg-green-700", icon: SiMongodb, description: "NoSQL database used in MERN stack and Firebase-integrated apps." },
    { name: "Firebase", color: "bg-yellow-500", icon: SiFirebase, description: "Used for authentication, Firestore DB, storage, and real-time updates." },
    { name: "Git", color: "bg-gray-500", icon: SiGit, description: "Version control system used for all solo and team-based projects." },
    { name: "Docker", color: "bg-blue-500", icon: SiDocker, description: "Containerized apps for local development and CI/CD environments." },
    { name: "Apache Kafka", color: "bg-pink-500", icon: SiApachekafka, description: "Used for event-driven data pipelines in scalable systems." }
  ],

  "AWS": [
    {
      name: "EC2, ECS, Lambda",
      color: "bg-orange-500",
      icon: BsShieldLock,
      description: "Used for compute, container orchestration, and serverless deployments."
    },
    {
      name: "S3, RDS, Glue",
      color: "bg-amber-600",
      icon: BsCpu,
      description: "Used for file storage, relational databases, and ETL jobs."
    },
    {
      name: "IAM, VPC, CloudWatch",
      color: "bg-purple-500",
      icon: BsShieldLock,
      description: "Used for access control, networking, and observability across AWS stack."
    },
    {
      name: "SQS, DynamoDB",
      color: "bg-green-600",
      icon: BsSearch,
      description: "Used for async messaging and NoSQL data operations."
    }
  ],
  
  // "AWS": [
  //   { name: "EC2", color: "bg-orange-500", icon: SiAmazonec2, description: "Elastic Compute Cloud for scalable virtual machines." },
  //   { name: "ECS", color: "bg-orange-600", icon: SiAmazonecs, description: "Elastic Container Service for container orchestration." },
  //   { name: "Lambda", color: "bg-orange-400", icon: SiAmazonaws, description: "Used for serverless functions and APIs." },
  //   { name: "S3", color: "bg-yellow-500", icon: SiAmazons3, description: "Object storage service for static assets and backups." },
  //   { name: "RDS", color: "bg-yellow-600", icon: SiAmazonrds, description: "Managed database service for relational engines like MySQL/Postgres." },
  //   { name: "Glue", color: "bg-amber-600", icon: SiAmazonaws, description: "ETL tool for big data jobs and transformations." },
  //   { name: "IAM", color: "bg-purple-500", icon: SiAmazoniam, description: "Identity and access management across AWS services." },
  //   { name: "VPC", color: "bg-purple-600", icon: SiAmazonaws, description: "Virtual networking environment for isolating cloud resources." },
  //   { name: "CloudWatch", color: "bg-purple-400", icon: SiAmazoncloudwatch, description: "Monitoring and observability tool for AWS resources." },
  //   { name: "SQS", color: "bg-green-600", icon: SiAmazonsqs, description: "Queue service for async messaging." },
  //   { name: "DynamoDB", color: "bg-green-500", icon: SiDynamodb, description: "NoSQL key-value and document database." }
  // ],


  "IDEs & Development": [
    {
      name: "VS Code & IntelliJ IDEA",
      color: "bg-slate-600",
      icon: VscCode,
      description: "Used for full-stack development, debugging, and integrated terminal workflows."
    },
    {
      name: "GitHub",
      color: "bg-gray-400",
      icon: SiGit,
      description: "Used for repo management, pull requests, actions (CI/CD), and collaboration."
    },
    {
      name: "Jira",
      color: "bg-indigo-500",
      icon: FaJira,
      description: "Used for Agile sprint planning, tracking tasks, and scrum workflows."
    },
    {
      name: "CI/CD",
      color: "bg-cyan-500",
      icon: BsShieldLock,
      description: "Configured pipelines using GitHub Actions to automate test, build, and deploy."
    }
  ]
};


  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <h2 className="text-2xl font-bold text-accent-purple">
        Technical Skills
      </h2>

      <div className="space-y-10">
        {Object.entries(skillsData).map(([category, categorySkills]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
              {category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {categorySkills.map((skill) => (
                <motion.button
                  key={skill.name}
                  onClick={() => {
                    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
                  }}
                  className={`group relative ${selectedSkill?.name === skill.name ? 'ring-2 ring-accent-purple' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute inset-0 ${skill.color} opacity-10 rounded-lg blur`} />
                  <div className="relative px-4 py-2 bg-white dark:bg-primary-800 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-accent-purple/20 via-accent-purple/10 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative min-h-[8rem]">
        <AnimatePresence mode="wait">
          {selectedSkill ? (
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full p-6 bg-white dark:bg-primary-800 rounded-xl shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative">
                      {selectedSkill.icon && (
                        <RotatingIcon icon={selectedSkill.icon} />
                      )}
                    </div>
                    <h4 className="text-lg font-medium text-accent-purple">
                      {selectedSkill.name}
                    </h4>
                  </div>
                  
                  <div className="relative">
                    <div 
                      ref={textRef}
                      className={`text-sm text-neutral-600 dark:text-neutral-400 transition-all duration-200 ${
                        isExpanded ? 'h-auto' : 'h-10 overflow-hidden'
                      }`}
                    >
                      {selectedSkill.description}
                    </div>
                    
                    {isTextTruncated && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsExpanded(!isExpanded);
                        }}
                        className="mt-1 text-accent-purple flex items-center gap-1 text-sm"
                      >
                        {isExpanded ? (
                          <>Show Less <ChevronUp className="w-4 h-4" /></>
                        ) : (
                          <>Read More <ChevronDown className="w-4 h-4" /></>
                        )}
                      </button>
                    )}
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 flex-shrink-0"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 p-6 bg-white dark:bg-primary-800 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 h-full">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Sparkles className="w-6 h-6 text-accent-purple" />
                </motion.div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Always eager to learn new technologies and grow as a developer. Tap on a skill to dive into my experience.                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default SkillsSection;