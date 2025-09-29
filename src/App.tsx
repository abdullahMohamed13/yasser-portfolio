import { Separator } from "./components/ui/separator"
import About from "./sections/About"
import ProjectSection from "./sections/ProjectsSection"
import Skills from "./sections/Skills"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return <div className="flex flex-col gap-8 md:gap-10">
      <About />
      <Separator />
      <ProjectSection />
      <Separator />
      <Skills />
    </div>
}

export default App
