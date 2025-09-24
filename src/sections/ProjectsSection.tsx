import HeaderSection from "@/components/HeaderSection";
import { projects } from "@/store/projects";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
    return <section id="projects">
        <HeaderSection text='My Projects' />
        
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
        <Badge variant='outline' className="hover:shadow-xl hover:bg-accent transition mt-4 text-lg px-4 py-2">Stay tuned for more projects...</Badge>
    </section>
}
