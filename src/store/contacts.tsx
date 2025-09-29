import { FaGithub} from 'react-icons/fa'
import GmailLogo from '/contacts/gmail.svg'
import LinkedInLogo from '/contacts/linkedin.svg'
import { toast } from 'sonner';

const logoSize = 'w-7 h-7';

export const whatsappNumber = "+201062585508";

export const contacts = [
  {
    value: 'LinkedIn',
    href: 'https://linkedin.com/in/yasser-allam-4b02ab331',
    icon: <img src={LinkedInLogo} className={logoSize} />
  },
  {
    value: 'GitHub',
    href: 'https://github.com/YasserAllam',
    icon: <FaGithub className={logoSize}/>
  },
  {
    value: 'Gmail',
    href: 'mailto:yasserallaam00@gmail.com',
    icon: <img src={GmailLogo} className={logoSize}/>
  },
]

export const handleWhatsappClick = () => {
    navigator.clipboard.writeText(whatsappNumber);
    toast("Copied successfully!", {
      description: "WhatsApp number copied to clipboard.",
    })
};