'use client';

import { forwardRef, type ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ModeToggle } from "@/components/mode-toggle";
import { navigationElements } from '@/store/navigationElements';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { FaLink } from 'react-icons/fa';
import { projects } from '@/store/projects';
import { handleNavigation } from '@/utils/handleNavigation';

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

export interface NavbarLink {
  href: string;
  label: string;
  icon: ReactNode
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  navigationLinks?: NavbarLink[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export const NavbarMobile = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      navigationLinks = navigationElements,
      ctaText = 'Resume',
      ...props
    },
    ref
  ) => {
    const navigate = useNavigate();
    const location = useLocation()

    return (
      <header
        ref={ref}
        className={cn(
          'sticky flex justify-center items-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side: Logo + Hamburger */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                  variant="ghost"
                  size="icon"
                >
                  <HamburgerIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="p-2">
                <NavigationMenu className="max-w-none">
                  <NavigationMenuList className="flex-col items-start gap-1">
                    {navigationLinks.map((link, index) => (
                      (link.label === 'Projects') ? (
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                              <AccordionTrigger className='ml-2.5'>
                                {link.label}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div>
                                  {projects.map((proj, index) => {
                                    return <Button
                                    key={index}
                                      variant='link'
                                      className="ml-1 w-full text-muted-foreground hover:text-primary cursor-pointer justify-start">
                                        <Link className="flex items-center gap-1" to={`/projects/${proj.name}`}>
                                          <FaLink />{proj.name}
                                        </Link>
                                    </Button>
                                  })}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                      ) : (
                        <NavigationMenuItem key={index} className="w-full">
                          <button
                            className="flex w-full gap-2 items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer no-underline"
                            onClick={() => handleNavigation(link.href, navigate, location)}
                          >
                            {link.label}
                          </button>
                        </NavigationMenuItem>
                      )
                      
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            <span onClick={() => navigate('/')} className="text-primary font-bold text-xl">Yasser Allam</span>
          </div>

          {/* Mode + CTA */}
          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button
              size="sm"
              variant="outline"
              className="text-sm cursor-pointer border border-border font-medium px-4 h-9 rounded-md"
            >
                <a href="/resume.pdf" download>{ctaText}</a>
            </Button>
          </div>
        </div>
      </header>
    );
  }
);

NavbarMobile.displayName = 'NavbarMobile';

export { HamburgerIcon };
