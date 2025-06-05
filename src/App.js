import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import { DarkModeProvider } from "./mode/DarkMode";


const App = () => {
  return (
    <DarkModeProvider>
      <Router basename="/Portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;