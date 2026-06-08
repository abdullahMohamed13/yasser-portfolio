import './index.css'
import About from "./sections/About"
import ProjectSection from "./sections/ProjectsSection"
import Skills from "./sections/Skills"
import ContactSection from "./sections/ContactSection"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [location]);

  return <div className="flex flex-col gap-15 md:gap-23">
      <About />
      <ProjectSection />
      <Skills />
      <ContactSection />
    </div>
}

export default App