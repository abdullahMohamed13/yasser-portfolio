import HeaderSection from "@/components/HeaderSection";
import HeroSection from "./HeroOnSmallScreens";

export default function About() {

return <section id="about">

        <HeroSection />
        
        <HeaderSection className="mt-10 md:mt-0" text="Hey There!" icon={<span className="wave">👋</span>}/>
            
        <div className="mt-5">
            <p className="text-muted-foreground">
                I'm always looking for new and exciting opportunities. Let's connect.
                Here's what I do, it's a bla bla and when I finish I do hob la,
                Here's what I do, it's a bla bla and when I finish I do hob la
                Here's what I do, it's a bla bla and when I finish I do hob la
            </p>
            <p className="text-muted-foreground">
                Here's what I do, it's a finish I do hob la,
                Here's what I do, it's a bla bla and when I finish I do hob la
            </p>
            <p className="text-muted-foreground">
                Here's what I do, it's a bla bla and wash I finish I do hob la,
                Here's what I do, it's a bla bla and when I finish I do hob la
                Here's what I do I finish I do hob la
            </p>
        </div>
    </section>
}
