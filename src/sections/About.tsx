import HeaderSection from "@/components/HeaderSection";
import HeroSection from "./HeroOnSmallScreens";
import { Badge } from "@/components/ui/badge";

export default function About() {

    // let words;

    return <section id="about">

        <HeroSection />
        
        <HeaderSection className="mt-10 md:mt-0" text="Hey There!" icon={<span className="wave">👋</span>}/>
            
        <div className="mt-5 flex flex-col text-lg text-center md:text-left gap-3">
            <p>
                I am <span className="text-primary font-semibold">Yasser Allam</span>,
                a <strong className="text-primary"> Data Analyst </strong>
                holding a Bachelor's degree in Systems and Information Sciences.
                I enjoy working with tools like {''}
                <Badge variant='secondary' className="text-base"><strong>Power BI</strong></Badge>, 
                {' '}<Badge variant='secondary' className="text-base"><strong>SQL</strong></Badge>, 
                {' '}<Badge variant='secondary' className="text-base"><strong>Excel</strong></Badge>, 
                {' '}<Badge variant='secondary' className="text-base"><strong>Power Query</strong></Badge>, 
                &
                {' '}<Badge variant='secondary' className="text-base"><strong> DAX</strong></Badge> {''}
                to turn raw data
                into meaningful insights.
            </p>
            <p>
                I've already built several projects
                (<a className="underline text-primary" href="#projects">check them out below 👇</a>)
                that showcase my ability to analyze,
                visualize, and present data in a clear and impactful way. My goal is to help businesses make smarter
                decisions through data, while continuously growing my skills and exploring new technologies in the data
                field.
            </p>
            
            {/* <TextGenerateEffect 
              words={words}
              className="text-2xl text-center md:text-left pb-8 pt-8"
              duration={0.6}
              staggerDelay={0.15}
            /> */}
        </div>
    </section>
}
