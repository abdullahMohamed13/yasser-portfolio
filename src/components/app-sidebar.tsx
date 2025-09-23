import { MdOutlineQueryStats } from 'react-icons/md'
import { AiOutlineIdcard } from 'react-icons/ai'
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
import { useState } from "react";
import { FaGithub, FaChartBar } from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'
import GmailLogo from '/contacts/gmail.svg'
import LinkedInLogo from '/contacts/linkedin.svg'
import { TextRevealButton } from "./ui/shadcn-io/text-reveal-button"
import TypingText from "@/components/ui/shadcn-io/typing-text/index";

// Menu items.
const items = [
  {
    title: "About me",
    url: "#about",
    icon: AiOutlineIdcard,
    // icon: ,
  },
  {
    title: "Projects",
    url: "#projects",
    icon: FaChartBar,
  },
  {
    title: "Skills",
    url: "#skills",
    icon: MdOutlineQueryStats,
  },
]

const logoSize = 'w-7 h-7'

const contacts = [
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

export function AppSidebar() {

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Sidebar> {/* Show variants */}
      <SidebarHeader className="pt-3.5">
          <div className="flex justify-between items-center">
              <img className="w-30 h-30 border-3 border-border rounded-full" src="/me.jpg" alt="My Photo" />
              <ModeToggle />
          </div>
          <TextRevealButton variant="gradient" text="Yasser Allam" />

          <TypingText
            text={["Data Analyst", "Data Engineer", "Programmer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-foreground text-2xl font-medium"
            textColors={['var(--color-chart-2)', 'var(--color-chart-3)', 'var(--color-chart-4)']}
            variableSpeed={{ min: 50, max: 120 }}
          />
          <SidebarGroupLabel>Contact</SidebarGroupLabel>
          <div className="flex gap-4 items-center">
            {contacts.map((contact) => {
              return <a key={contact.value} target="_blank" aria-label={contact.value} href={contact.href}>
                {contact.icon}
              </a>
            })}

            <Tooltip>
              <TooltipTrigger>
                <a onClick={() => copyToClipboard("+01062585508")} className="relative">
                  <SiWhatsapp color="#25d366" className={`${logoSize} cursor-pointer`} />
                  {copied && (
                    <span 
                      className="absolute left-full z-[1000] ml-2 bg-foreground text-background px-2 py-1 rounded text-xs animate-pulse">
                      Copied!
                    </span>
                  )}
                </a>
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
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a className="cursor-pointer" href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-start">
        <Button variant='outline' size='sm'>
            <a target="_blank" href="https://yasser-portfolio-kappa.vercel.app">
                My Previous Experience    
            </a>
        </Button>
        <Button size='sm' variant='destructive'>
            <a href="/resume.pdf" download>
                Download My Resume
            </a>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}