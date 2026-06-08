import { contacts, handleWhatsappClick } from "@/store/contacts";
import { SiWhatsapp } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <footer className="mt-15 mb-5 flex flex-col items-center gap-2 text-center">
      <p className="text-lg font-semibold">Appreciate You Stopping By</p>
      <p className="text-sm md:text-base text-muted-foreground">
        Always open to new opportunities & collaborations.
      </p>
      <p className="text-sm text-muted-foreground">
        Whether it's data, projects, or a quick chat — feel free to reach out.
      </p>
			<div className="md:hidden mt-4 flex justify-center flex-col items-center gap-4">

	        <Badge className="rounded-sm text-white text-xl">
	            Contact Me Here:
	        </Badge>
	
	        <div className="flex gap-5">
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
      <p className="text-sm text-muted-foreground mt-3">
        © {new Date().getFullYear()} Yasser Allam. All Rights Reserved.
			</p>
    </footer>
  )
}
