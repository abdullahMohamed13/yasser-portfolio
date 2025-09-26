import { Card, CardTitle, CardHeader, CardContent, CardDescription, CardAction } from "@/components/ui/card";
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

export default function ProjectCard({id, imgSrc, name, description, links, techStack}: ProjectProps) {
    const navigate = useNavigate()
    return <Card key={id} className="relative hover:scale-102 transition-all hover:shadow-xl">
        <CardHeader className="flex flex-col">
                <CardTitle className="text-lg leading-5.5 w-[90%]">{name}</CardTitle>
                <CardAction
                    onClick={() => navigate(`/projects/${name}`)}
                    className="group absolute top-2 right-2 border border-border shadow-2xl p-2 rounded-3xl cursor-pointer"
                >
                    <FaExpandArrowsAlt
                        title="Show Project Details"
                        size={14}
                        className="group-hover:text-destructive transition-colors"
                    />
                </CardAction>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">

            <img src={imgSrc[0]} alt="Project Image" className="md:hidden rounded-md" />

            <div className="hidden md:flex">
                <Dialog>
                    <DialogTrigger>
                        <img src={imgSrc[0]} className="rounded-md cursor-pointer"
                        title="Show Picture" alt="Project Image" />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{name}</DialogTitle>
                        </DialogHeader>
                        <Carousel>
                            <CarouselContent>
                                {imgSrc.map((src, index) => {
                                    return <CarouselItem>
                                            <img src={src} key={index} alt="Project Image"/>
                                    </CarouselItem>
                                })}
                            </CarouselContent>
                            {imgSrc.length === 1 ? '' : (
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

            <div className="flex mt-2 justify-between *:flex *:flex-col *:gap-2">
                <div> 
                    <Badge variant='outline'>Used Tech Stack:</Badge>
                    <div className="flex gap-2 justify-center items-center">
                        {techStack.map((stack, index) => {
                            return <Tooltip key={index}>
                                    <TooltipTrigger>
                                        {stack.icon}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {stack.name}
                                    </TooltipContent>
                                </Tooltip>
                        })}
                    </div>
                </div>

                <Separator orientation="vertical"  />

                <div>
                    <Badge variant='outline'>Quick Links:</Badge>
                    <div className="flex gap-2 justify-center items-center">
                        {links.map((link) => {
                            return <a
                                    key={link.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={link.href}
                                >
                                    <Tooltip>
                                        <TooltipTrigger>
                                            {link.icon}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {link.name}
                                        </TooltipContent>
                                    </Tooltip>
                                </a>
                        })}
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
}