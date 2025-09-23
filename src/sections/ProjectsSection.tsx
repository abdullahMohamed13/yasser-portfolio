import HeaderSection from "@/components/HeaderSection";
import { Card, CardTitle, CardHeader, CardContent, CardDescription, CardAction } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { projects } from "@/store/projects";
import { Badge } from "@/components/ui/badge";
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Separator } from "@/components/ui/separator";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProjectsSection() {
    const navigate = useNavigate()
    return <section id="projects">
        <HeaderSection text='My Projects' />
        
        <div className="mt-5 grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 gap-5">
            {projects.map((proj, index) => {
                return <Card key={index} className="relative hover:shadow-xl transition-shadow">
                    <CardHeader className="flex flex-col">
                            <CardTitle className="self-start text-lg leading-5.5">{proj.name}</CardTitle>
                            <CardAction
                                onClick={() => navigate('projects')}
                                className="group absolute top-2 right-2 border border-border shadow-2xl p-2 rounded-3xl cursor-pointer"
                            >
                                <FaExternalLinkAlt
                                    title="Show Project Details"
                                    size={14}
                                    className="group-hover:text-destructive transition-colors"
                                />
                            </CardAction>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-3">

                        <Dialog>
                            <DialogTrigger>
                                <img src={proj.imgSrc[0]} className="cursor-pointer"
                                title="Show Picture" alt="Project Image" />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{proj.name}</DialogTitle>
                                </DialogHeader>
                                <Carousel>
                                    <CarouselContent>
                                        {proj.imgSrc.map((src, index) => {
                                            return <CarouselItem>
                                                    <img src={src} key={index} alt="Project Image"/>
                                            </CarouselItem>
                                        })}
                                    </CarouselContent>
                                    {proj.imgSrc.length === 1 ? '' : (
                                        <>
                                            <CarouselPrevious className="-mx-[15px]" />
                                            <CarouselNext className="-mx-[15px]" />
                                        </>
                                    )}
                                </Carousel>
                            </DialogContent>
                        </Dialog>

                        <Separator />

                        <CardDescription>{proj.description}</CardDescription>

                        <div className="flex mt-2 justify-between *:flex *:flex-col *:gap-2">
                            <div> 
                                <Badge variant='outline'>Used Tech Stack:</Badge>
                                <div className="flex gap-2 justify-center items-center">
                                    {proj.techStack.icons.map((icon, index) => {
                                        return <i key={index}>
                                            {icon}
                                        </i>
                                    })}
                                </div>
                            </div>

                            <Separator orientation="vertical"  />

                            <div>
                                <Badge variant='outline'>Links:</Badge>
                                <div className="flex gap-2 justify-center items-center">
                                    {proj.links.map((link) => {
                                        return <a
                                                key={link.name}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={link.href}
                                            >
                                                {link.icon}
                                            </a>
                                    })}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            })}
        </div>
        <Badge variant='outline' className="hover:shadow-xl hover:bg-accent transition mt-4 text-lg px-4 py-2">Stay tuned for more projects...</Badge>
    </section>
}
