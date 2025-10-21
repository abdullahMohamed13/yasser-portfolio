import HeaderSection from "@/components/HeaderSection";
import { Badge } from "@/components/ui/badge";
import { contacts, handleWhatsappClick } from "@/store/contacts";
import { SiWhatsapp } from "react-icons/si";

export default function About() {

    // let words;

    return <section id="about">

        {/* About section on mobile */}
        
        <HeaderSection className="mt-4 md:mt-0" text="Hey There!" icon={<span className="wave">👋</span>}/>
            
        <div className="mt-5 flex flex-col text-lg text-center md:text-left gap-5">
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
            
            <div className="md:hidden mt-4 flex justify-center flex-col items-center gap-4">

                <Badge className="rounded-sm text-white text-xl">
                    Contact Me Here:
                </Badge>

                <div className="flex gap-2">
                    {contacts.map((contact) => {
                        return <a key={contact.value} target="_blank" aria-label={contact.value} href={contact.href}>
                        {contact.icon}
                        </a>
                    })}
                    <i onClick={handleWhatsappClick} className="relative">
                        <SiWhatsapp color="#25d366" className="w-7 h-7 cursor-pointer" />
                    </i>
                </div>

            </div>
        </div>
    </section>
}
