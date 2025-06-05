import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";
import { useDarkMode } from "../mode/DarkMode";

const PortfolioTerminal = ({ onClose, terminalButtonRef }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to CHSCPortfolioOS v1-aplha",
    'Type "help" for available commands',
  ]);
  const [isSudo, setIsSudo] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const outputContainerRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const { isDarkMode } = useDarkMode();

  const commands = {
    help: () => [
      "Available commands:",
      "• about - Learn about Sai Charan",
      "• skills - View technical skills",
      "• projects - List major projects",
      "• contact - Get contact info",
      "• whoami - Know your identity",
      "• clear - Clear terminal",
      "• sudo - Gain admin access",
      "• exit - Close terminal",
      "• christmas - Surprise!",
    ],
    about: () => [
      "Sai Charan Chandra",
      "Full Stack Developer | MS CS @ USF",
      "Based in Tampa, Florida",
      "Passionate about full-stack development, cloud technologies, and building impactful applications.",
      <div key="about-link">
        Learn more on the{" "}
        <Link to="/" className="text-accent-purple underline">
          Home Page
        </Link>
        .
      </div>,
    ],
    skills: () => [
      "Technical Skills:",
      "• Languages: Java, JavaScript, Python, SQL, TypeScript",
      "• Frameworks: Spring Boot, React.js, Flask, Express.js",
      "• Databases: PostgreSQL, MongoDB, Firebase",
      "• DevOps: Docker, GitHub Actions, Apache Kafka",
      "• Cloud: AWS (EC2, S3, RDS, Lambda, IAM, Glue)",
      <div key="skills-link">
        View projects demonstrating these skills on the{" "}
        <Link to="/projects" className="text-accent-purple underline">
          Projects Page
        </Link>
        .
      </div>,
    ],
    projects: () => [
      "Featured Projects:",
      "",
      "• Personal Goal Tracker (Jira Clone)",
      "  A full-stack Jira-style task manager with real-time team collaboration and version tracking.",
      "  Tech: React, Node.js, Java, Spring Boot",
      "",
      "• Medicine Prescription Tracker",
      "  Healthcare platform with multilingual alerts, health logging, and AI-driven insights.",
      "  Tech: Python, Flask, HTML, CSS, Chart.js",
      "",
      "• Travel Journal App (MERN)",
      "  Rich-text journaling platform with secure login and Cloudinary image uploads.",
      "  Tech: MongoDB, Express.js, React, Node.js, Cloudinary",
      "",
      "• Live Script Compiler",
      "  Web-based code editor with 2000-line support and live preview using Ace Editor.",
      "  Tech: HTML, CSS, JS, GitHub Pages, Ace Editor",
      "",
      "• Task Manager Web App",
      "  Kanban tool with real-time Firebase sync, visual metrics, and drag-drop UI.",
      "  Tech: React, Redux Toolkit, Firebase, Tailwind CSS",
      "",
      "• Image Cartoonification",
      "  Flask + CNN app that turns photos into cartoons using deep learning.",
      "  Tech: CNN, TensorFlow, Keras, Flask",
      "",
      <div key="projects-link">
        View demos and code on the{" "}
        <Link to="/projects" className="text-accent-purple underline">
          Projects Page
        </Link>
        .
      </div>,
    ],
    contact: () => [
      "Contact Information:",
      <div key="email">
        • Email:{" "}
        <a
          href="mailto:saicharanchandra0@gmail.com"
          className="text-accent-purple underline"
        >
          saicharanchandra0@gmail.com
        </a>
      </div>,
      <div key="linkedin">
        • LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/charan-ch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-purple underline"
        >
          /in/charan-ch
        </a>
      </div>,
      <div key="github">
        • GitHub:{" "}
        <a
          href="https://github.com/charan819"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-purple underline"
        >
          /charan819
        </a>
      </div>,
    ],
    whoami: () => {
      if (isSudo) {
        return ["You are currently operating as root (admin mode)."];
      }
      const responses = [
        "You're exploring Charan's's portfolio like a true developer!",
        "Looks like you're someone who enjoys terminals!",
        "A curious visitor with great taste in UI.",
        "Hopefully a potential collaborator or recruiter!",
        "Welcome to a developer's world of logic and design.",
      ];
      return [responses[Math.floor(Math.random() * responses.length)]];
    },
    clear: () => {
      setOutput([]);
      return [];
    },
    sudo: () => {
      if (isSudo) {
        return [
          "You're already in admin mode. Proceed with caution.",
        ];
      }
      setIsSudo(true);
      return [
        "Admin mode activated.",
        "You now have elevated access.",
      ];
    },
    exit: () => {
      if (isSudo) {
        return [
          'Admin mode active. Use "sudo exit" to exit safely.',
        ];
      }
      setTimeout(onClose, 500);
      return ["Goodbye! Thank you for visiting."];
    },
    christmas: () => [
      "Surprise! You found a hidden message.",
      "Keep exploring, keep building.",
      "The best UIs have the best christmas gifts!",
      'Type "sudo" to see more.',
    ],
  };

  const handleCommand = (cmd) => {
    const args = cmd.toLowerCase().trim().split(" ");
    const command = args[0];

    if (cmd.trim()) {
      setCommandHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);
    }

    if (args.length === 2 && args[0] === "sudo" && args[1] === "exit") {
      setIsSudo(false);
      return [
        "Sudo powers revoked.",
        "You may now leave...",
      ];
    }

    if (command in commands) {
      return commands[command]();
    }

    if (command === "rm" || command === "drop") {
      return isSudo
        ? ["Nice try! You can't delete my portfolio." ]
        : ["Permission denied: Need sudo access for that command."];
    }

    return [
      `Command not found: ${command}`,
      'Type "help" for available commands',
    ];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const result = handleCommand(input);
    setOutput((prev) => [
      ...prev,
      `${isSudo ? "# " : "> "}${input}`,
      ...result,
    ]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleTerminalClick = (e) => {
    e.stopPropagation();
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop =
        outputContainerRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (terminalButtonRef?.current?.contains(e.target)) {
        return;
      }
      if (terminalRef.current && !terminalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, terminalButtonRef]);

  return (
    <div
      ref={terminalRef}
      className={`rounded-2xl overflow-hidden shadow-lg ${
      isDarkMode ? "bg-primary-800" : "bg-white"
      }`}
      onClick={handleTerminalClick}
      style={{
        width: "100%",
        height: "450px",
        resize: "both",
        minWidth: "300px",
        minHeight: "200px",
      }}
    >
      <div
        className={`$
          {isDarkMode ? "bg-primary-900" : "bg-neutral-100"}
        p-3 flex items-center gap-3`}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-accent-purple" />
          <span
            className={`$
              {isDarkMode ? "text-neutral-100" : "text-neutral-700"}
            text-sm`}
          >
            charan-terminal {isSudo ? "(root)" : "(user)"}
          </span>
        </div>
      </div>

      <div
        ref={outputContainerRef}
        className={`p-4 font-mono text-sm $
          {isDarkMode ? "text-neutral-100" : "text-neutral-700"}
        space-y-2 overflow-y-auto`}
        style={{ height: "calc(100% - 48px)" }}
      >
        {output.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-accent-purple">{isSudo ? "#" : ">"}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`w-full bg-transparent outline-none $
              {isDarkMode ? "text-neutral-100" : "text-neutral-700"}
            caret-accent-purple`}
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default PortfolioTerminal;
