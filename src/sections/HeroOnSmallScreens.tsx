import TypingText from "@/components/ui/shadcn-io/typing-text";
import { contacts, handleWhatsappClick } from "@/store/contacts";
import { SiWhatsapp } from "react-icons/si";

export default function HeroSection() {
    return <section className="md:hidden">
        <div className="gap-2 flex justify-center items-center flex-col">
            <img src="/me.png" alt="Picture of me" className="rounded-full " />
            <TypingText
              text={["Data Analyst", "Data Engineer", "Programmer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-primary text-2xl font-medium"
              variableSpeed={{ min: 50, max: 120 }}
            />
        </div>

        {/* Contact me appears on small screen */}
        <div className="mt-4 flex justify-center gap-4 items-center">
            {contacts.map((contact) => {
                return <a key={contact.value} target="_blank" aria-label={contact.value} href={contact.href}>
                {contact.icon}
                </a>
            })}
            <i onClick={handleWhatsappClick} className="relative">
                <SiWhatsapp color="#25d366" className="w-7 h-7 cursor-pointer" />
            </i>
        </div>
    </section>
}