import { ModeToggle } from "./mode-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { SiWhatsapp } from 'react-icons/si'
import { TextRevealButton } from "./ui/shadcn-io/text-reveal-button"
import TypingText from "@/components/ui/shadcn-io/typing-text/index";
import { useNavigate, useLocation } from 'react-router-dom'
import { navigationItems, handleNavigation } from '@/utils/navigation'
import { contacts, handleWhatsappClick } from "@/store/contacts";

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar> {/* Show variants */}
      <SidebarHeader className="pt-3.5">
          <div className="flex justify-between items-center">
              <img className="w-35 h-35 border-3 border-border rounded-full" src="/me.png" alt="My Photo" />
              <ModeToggle />
          </div>
          <TextRevealButton variant="gradient" text="Yasser Allam" />

          <div className='flex items-center gap-1'>
            <TypingText
              text={["Data Analyst", "Programmer"]}
              typingSpeed={75}
              pauseDuration={4000}
              showCursor={true}
              cursorCharacter="|"
              className="text-primary text-2xl font-medium"
              variableSpeed={{ min: 50, max: 120 }}
            />
          </div>
          <SidebarGroupLabel>Contact</SidebarGroupLabel>
          <div className="flex gap-4 items-center">
            {contacts.map((contact) => {
              return <a key={contact.value} target="_blank" aria-label={contact.value} href={contact.href}>
                {contact.icon}
              </a>
            })}

            <Tooltip>
              <TooltipTrigger>
                <i onClick={handleWhatsappClick} className="relative">
                  <SiWhatsapp color="#25d366" className="w-7 h-7 cursor-pointer" />
                </i>
              </TooltipTrigger>
              <TooltipContent>
                Copy To Clipboard
              </TooltipContent>
            </Tooltip>
          </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant='link'
                      onClick={() => handleNavigation(item.url, navigate, location)}
                      className="w-full text-foreground cursor-pointer flex gap-2 justify-start">
                      {item.icon}
                      <span>{item.title}</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-start">
        <Button variant='destructive' size='sm'>
            <a target="_blank" href="https://yasser-portfolio-kappa.vercel.app">
                My Previous Experience    
            </a>
        </Button>
        {/* <Button size='sm' variant='destructive'>
            <a href="/resume.pdf" download>
                Download My Resume
            </a>
        </Button> */}
      </SidebarFooter>
    </Sidebar>
  )
}