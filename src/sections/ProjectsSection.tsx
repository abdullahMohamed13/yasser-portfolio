import HeaderSection from "@/components/HeaderSection";
import { projects } from "@/store/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { FaExpandArrowsAlt } from 'react-icons/fa'
import { motion } from "framer-motion";

function ProjectImage({ imgSrc, name }: { imgSrc: string[]; name: string }) {
    const firstImg = imgSrc[0]

    return (
        <>
            <img src={firstImg} alt="Project Image" className="md:hidden rounded-md w-full" />

            <div className="hidden md:flex">
                <Dialog>
                    <DialogTrigger>
                        <img
                            src={firstImg}
                            className="rounded-md cursor-pointer w-full"
                            title="Show Picture"
                            alt="Project Image"
                        />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{name}</DialogTitle>
                        </DialogHeader>
                        {imgSrc.length > 1 ? (
                            <Carousel>
                                <CarouselContent>
                                    {imgSrc.map((src, index) => (
                                        <CarouselItem key={index}>
                                            <img src={src} alt="Project Image" />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="-mx-5" />
                                <CarouselNext className="-mx-5" />
                            </Carousel>
                        ) : (
                            <img src={firstImg} alt="Project Image" />
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

function ProjectContent({ proj, index }: { proj: typeof projects[number]; index: number }) {
    const navigate = useNavigate()
    const projectPath = `/projects/${proj.name}`
    const num = String(index + 1).padStart(2, '0')

    const imageSection = (
        <ProjectImage imgSrc={proj.imgSrc} name={proj.name} />
    )

    const textSection = (
        <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
                <div>
                    <span className="text-5xl font-bold text-primary/30">{num}</span>
                    <h3 className="text-2xl font-bold mt-1">{proj.name}</h3>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate(projectPath)}
                    className="shrink-0"
                    title="Show Project Details"
                >
                    <FaExpandArrowsAlt size={16} className="hover:text-destructive transition-colors" />
                </Button>
            </div>

            <p className="text-muted-foreground">{proj.description}</p>

            <div className="flex flex-col gap-2 items-end md:items-start">
                <Badge variant='default' className="w-fit">Used Tech Stack</Badge>
                <div className="flex gap-2">
                    {proj.techStack.map((stack, i) => (
                        <Tooltip key={i}>
                            <TooltipTrigger>{stack.icon}</TooltipTrigger>
                            <TooltipContent>{stack.name}</TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto justify-end md:justify-start">
                {proj.links.map((link, i) => (
                    <Button key={i} className="text-sm" asChild>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-white gap-2"
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    </Button>
                ))}
            </div>
        </div>
    )

    return (
        <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                {imageSection}
            </div>
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                {textSection}
            </div>
        </div>
    )
}

export default function ProjectsSection() {
    return <section id="projects">

          <HeaderSection text='My Work' />

        <div className="mt-8 flex flex-col gap-10">
            {projects.map((proj, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <ProjectContent proj={proj} index={index} />
                    {index < projects.length - 1 && <Separator className="mt-10" />}
                </motion.div>
            ))}
        </div>
    </section>
}
