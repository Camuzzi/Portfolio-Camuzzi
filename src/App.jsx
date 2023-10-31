import { Routes,Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

import Home from "./views/Home/Home.jsx";
import About from "./views/About/About.jsx";
import Contact from "./views/Contact/Contact.jsx";
import Skills from "./views/Skills/Skills.jsx";
import Projects from "./views/Projects/Projects.jsx";


function App() {

  return (
    <div>

      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </div>
  )
}

export default App
