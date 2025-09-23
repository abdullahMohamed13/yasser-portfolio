import { motion } from "framer-motion"
import { Separator } from "./components/ui/separator"
import About from "./sections/About"
import ProjectSection from "./sections/ProjectsSection"
// import SubProjectSection from "./sections/SubProjectSec"
import Skills from "./sections/Skills"

function App() {

  return (
    <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-10"
      >
        <About />
        <Separator />
        <ProjectSection />
        {/* <SubProjectSection /> */}
        <Separator />
        <Skills />
      </motion.main>
  )
}

export default App
