import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { AppSidebar } from "./app-sidebar"
import { navigationItems, handleNavigation } from '@/utils/navigation'
import { ModeToggle } from "./mode-toggle"

export function ResponsiveNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* only for md and up */}
      <div className="hidden md:flex">
        <AppSidebar />
      </div>

      {/* only for small screens */}
      <div className="flex md:hidden w-full items-center justify-between p-4 border-b">
        <span className="font-bold text-lg">Yasser Allam</span>
        

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-2 mt-4">
                {navigationItems.map((item) => (
                  <Button
                    key={item.title}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => handleNavigation(item.url, navigate, location)}
                  >
                    {item.title}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
