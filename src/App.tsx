import { Routes, Route } from "react-router-dom";

import Main from "./layouts/Main-layout";
import About from "./pages/About";
import Projects from "./pages/My-projects";
import Contact from "./pages/Contact";
import Skills from "./pages/My-skills";
import Academic from "./pages/Academic";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="academic" element={<Academic />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
