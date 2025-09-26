import HeaderSection from "@/components/HeaderSection";
import { projects } from "@/store/projects";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import TypingText from "@/components/ui/shadcn-io/typing-text";

export default function ProjectsSection() {
    return <section id="projects">
        
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center">
            <HeaderSection text='My Projects' />
            
            <Badge variant='outline' className="hover:shadow-xl hover:bg-accent transition text-md px-4 py-1">
                Stay tuned for more
                <TypingText
                    deletingSpeed={500}
                    hideCursorWhileTyping={true}
                    text={["...", "...", "..."]}
                    typingSpeed={1000}
                    pauseDuration={500}
                    showCursor={false}
                    className="text-foreground text-2xl font-medium"
                    variableSpeed={{ min: 450, max: 500 }}
                    startOnVisible={true}
                />
            </Badge>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 gap-5">
            {projects.map((proj, index) => (
                <ProjectCard 
                    id={index}
                    name={proj.name}
                    description={proj.description}
                    imgSrc={proj.imgSrc}
                    links={proj.links}
                    techStack={proj.techStack}
                />
            ))}
        </div>
    </section>
}
