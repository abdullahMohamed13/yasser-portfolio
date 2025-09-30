import HeaderSection from "@/components/HeaderSection";
import { projects } from "@/store/projects";
import ProjectCard from "@/components/ProjectCard";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
    return <section id="projects">
        
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center">
            <HeaderSection text='My Projects' />
            
            <Badge variant='outline'
                className="hover:shadow-xl hover:bg-accent transition text-lg px-4 py-1"
            >
                Stay tuned for more
                <TypingText
                    deletingSpeed={500}
                    hideCursorWhileTyping={true}
                    text={["...", "...", "..."]}
                    typingSpeed={1000}
                    pauseDuration={500}
                    showCursor={false}
                    className="text-foreground text-2xl font-medium leading-[1.2] min-h-[2rem]"
                    variableSpeed={{ min: 450, max: 500 }}
                    startOnVisible={true}
                />
            </Badge>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
