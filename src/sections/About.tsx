import HeaderSection from "@/components/HeaderSection";
import HeroSection from "./HeroOnSmallScreens";

export default function About() {

return <section id="about">

        <HeroSection />
        
        <HeaderSection className="mt-10 md:mt-0" text="Hey There!" icon={<span className="wave">👋</span>}/>
            
        <div className="mt-5 flex flex-col text-lg text-center md:text-left gap-3">
            <p className="text-muted-foreground">
                Hi, I'm <span className="text-primary font-semibold">Yasser Allam</span>,
                a <strong className="text-primary"> Data Analyst </strong>
                holding a Bachelor's degree in Systems and Information Sciences.
                I enjoy working with tools like
                <strong> Power BI</strong>, 
                <strong> SQL</strong>, 
                <strong> Excel</strong>, 
                <strong> Power Query</strong>, 
                and
                <strong> DAX </strong>
                to turn raw data
                into meaningful insights.

            </p>
            <p className="text-muted-foreground">
                I've already built several projects
                (<a className="underline text-primary" href="#projects">check them out below 👇</a>)
                that showcase my ability to analyze,
                visualize, and present data in a clear and impactful way. My goal is to help businesses make smarter
                decisions through data, while continuously growing my skills and exploring new technologies in the data
                field.
            </p>
        </div>
    </section>
}
