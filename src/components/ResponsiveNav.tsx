import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { AppSidebar } from "./desktop-sidebar"
import { navigationItems, handleNavigation } from '@/utils/navigation'
import { ModeToggle } from "./mode-toggle"
import { useState } from "react"

export function ResponsiveNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false); // Control sheet

  return (
    <>
      {/* only for md and up */}
      <div className="hidden md:flex">
        <AppSidebar />
      </div>

      {/* only for small screens */}
      <div className="flex md:hidden w-full items-center justify-between py-4 border-b">
        <span className="font-bold text-2xl">Yasser Allam</span>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-3" aria-describedby='Nav menu'>
              <SheetTitle className="text-xl py-4 border-b">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate to different sections of the portfolio
              </SheetDescription>
              <nav className="flex flex-col gap-2">
                {navigationItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => {
                      handleNavigation(item.url, navigate, location)
                      setOpen(false);
                    }}
                  >
                    {item.icon} {item.title}
                  </Button>
                ))}
              </nav>
              <a className="mt-5" target="_blank" href="https://yasser-portfolio-kappa.vercel.app">
                <Button variant='destructive' size='sm'>
                  My Previous Experience
                </Button>
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
