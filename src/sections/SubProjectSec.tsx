import HeaderSection from "@/components/HeaderSection";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { projects } from "@/store/projects";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function SubProjectsSection() {
    const navigate = useNavigate()
    return <section className="px-3">
        <HeaderSection text='My Projects' />

        <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
                {projects.map((proj, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                    <CardHeader>
                        <CardTitle className="mb-1.5 text-lg leading-5.5">{proj.name}</CardTitle>
                        <CardDescription>{proj.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <img className="rounded-lg w-40 h-40 mb-3" src="/me.png" alt="" />
                        <Badge variant="outline">Used Tech Stack:</Badge>
                        <div className="flex gap-2 flex-wrap">
                        {proj.techStack.icons.map((icon, i) => (
                            <i key={i}>{icon}</i>
                        ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => navigate("projects")}>Show Details</Button>
                    </CardFooter>
                    </Card>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    </section>
}
