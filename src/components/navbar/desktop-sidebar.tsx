import { useNavigate, useLocation, Link } from 'react-router-dom'
// Custom components
import { ModeToggle } from "../mode-toggle"
// Shadcn components
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
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

// Animated components
import TypingText from "@/components/ui/shadcn-io/typing-text/index";
// Store
import { contacts, handleWhatsappClick } from "@/store/contacts";
import { projects } from "@/store/projects"
import { handleNavigation } from '@/utils/handleNavigation'

// icons
import { SiWhatsapp } from 'react-icons/si'
import { FaLink } from "react-icons/fa";
import { navigationElements } from '@/store/navigationElements'

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar className='bg-primary/40'>
      <SidebarHeader className="pt-10">
          <div className="flex justify-between items-center mb-1">

            <div className='relative flex ml-3.5 items-center'>
              <div className='text-2xl font-bold'>
                Yasser Allam
              </div>

              {/* THE LINE NEXT TO THE YASSER ALLAM NAME */}
              <div className='absolute -left-3.5 bg-primary w-1.5 h-full' />
            </div>

            <ModeToggle />
          </div>

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
              {navigationElements.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    {item.label === 'Projects' ?
                      (
                        <>
                          <Button
                            variant='link'
                            className="w-full flex gap-2 justify-start"
                            onClick={() => handleNavigation(item.href, navigate, location)}
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </Button>
                          <div>
                            {projects.map((proj, index) => {
                              return <Button
                                key={index}
                                variant='link'
                                className="ml-1 w-full text-muted-foreground hover:text-primary cursor-pointer justify-start">
                                  <Link className="flex text-[14px] items-center gap-1" to={`/projects/${proj.name}`}>
                                    <FaLink />{proj.name}
                                  </Link>
                              </Button>
                            })}
                          </div>
                        </>
                      ) : (
                        <Button
                          variant='link'
                          onClick={() => handleNavigation(item.href, navigate, location)}
                          className="w-full text-foreground flex gap-2 justify-start">
                          {item.icon}
                          <span>{item.label}</span>
                        </Button>
                      )
                    }
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="flex items-start">
        <Button size='sm' variant='destructive'>
            <a href="/Yasser-Allam-Resume.pdf" download>
                Download My Resume
            </a>
        </Button>
        <Button variant='outline' size='sm'>
            <a target="_blank" className='hover:underline' href="https://yasser-portfolio-kappa.vercel.app">
                My Previous Experience    
            </a>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}