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
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Badge } from "@/components/ui/badge";
import { type ProjectProps } from "@/store/projects";

export default function ProjectCard({id, imgSrc, name, description, links, techStack}: ProjectProps) {
    const navigate = useNavigate()
    return <Card key={id} className="relative hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-col">
                <CardTitle className="self-start text-lg leading-5.5">{name}</CardTitle>
                <CardAction
                    onClick={() => navigate(`/projects/${id}`)}
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
                    <img src={imgSrc[0]} className="cursor-pointer"
                    title="Show Picture" alt="Project Image" />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{name}</DialogTitle>
                    </DialogHeader>
                    <Carousel>
                        <CarouselContent>
                            {imgSrc.map((src) => {
                                return <CarouselItem>
                                        <img src={src} key={src} alt="Project Image"/>
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

            <Separator />

            <CardDescription>{description}</CardDescription>

            <div className="flex mt-2 justify-between *:flex *:flex-col *:gap-2">
                <div> 
                    <Badge variant='outline'>Used Tech Stack:</Badge>
                    <div className="flex gap-2 justify-center items-center">
                        {techStack.icons.map((icon, index) => {
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
                        {links.map((link) => {
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
}