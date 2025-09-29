import { Card, CardTitle, CardHeader, CardContent, CardDescription, CardAction, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
import { Badge } from "@/components/ui/badge";
import { type ProjectProps } from "@/store/projects";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";

export default function ProjectCard({id, imgSrc, name, description, links, techStack}: ProjectProps) {
    const navigate = useNavigate()
    return (
        <Card key={id} className="relative hover:scale-102 transition-all hover:shadow-xl flex flex-col">
            <CardHeader className="flex flex-col">
                <CardTitle className="text-lg leading-5.5 w-[90%]">{name}</CardTitle>
                <CardAction
                    onClick={() => navigate(`/projects/${name}`)}
                    className="group absolute top-3 right-2.5 border border-border shadow-2xl p-2 rounded-3xl cursor-pointer"
                >
                    <FaExpandArrowsAlt
                        title="Show Project Details"
                        size={14}
                        className="group-hover:text-destructive transition-colors"
                    />
                </CardAction>
            </CardHeader>

            <CardContent className="flex flex-col gap-3 flex-1">
                <img src={imgSrc[0]} alt="Project Image" className="md:hidden rounded-md" />

                <div className="hidden md:flex">
                    <Dialog>
                        <DialogTrigger>
                            <img 
                                src={imgSrc[0]} 
                                className="rounded-md cursor-pointer"
                                title="Show Picture" 
                                alt="Project Image" 
                            />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{name}</DialogTitle>
                            </DialogHeader>
                            <Carousel>
                                <CarouselContent>
                                    {imgSrc.map((src, index) => (
                                        <CarouselItem key={index}>
                                            <img src={src} alt="Project Image"/>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {imgSrc.length > 1 && (
                                    <>
                                        <CarouselPrevious className="-mx-[15px]" />
                                        <CarouselNext className="-mx-[15px]" />
                                    </>
                                )}
                            </Carousel>
                        </DialogContent>
                    </Dialog>
                </div>

                <Separator />

                <CardDescription>{description}</CardDescription>
            </CardContent>

            {/* Footer pushed to the bottom */}
            <div className="flex flex-col gap-2 justify-center items-center">
                <Badge variant='destructive'>Used Tech Stack</Badge>
                <div className="flex gap-2">
                    {techStack.map((stack, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger>{stack.icon}</TooltipTrigger>
                            <TooltipContent>{stack.name}</TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>
            <CardFooter className="flex flex-col flex-wrap justify-center gap-2">
                {links.map((link, index) => (
                    <Button
                        key={index}
                        className="w-full text-sm"
                        asChild
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 justify-center"
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    </Button>
                ))}
            </CardFooter>
        </Card>
    )
}
