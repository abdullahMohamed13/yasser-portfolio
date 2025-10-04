import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function MobileNav() {
  return (
    <div className="flex items-center">
      {/* Trigger button */}
      <Sheet>
        <SheetTrigger className="md:hidden p-2">
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        {/* Sidebar Content */}
        <SheetContent side="left" className="w-64">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>

          <nav className="mt-4 flex flex-col space-y-4">
            <a href="/" className="text-lg font-medium hover:text-primary">
              Home
            </a>
            <a href="#about" className="text-lg font-medium hover:text-primary">
              About
            </a>
            <a href="/services" className="text-lg font-medium hover:text-primary">
              Services
            </a>
            <a href="/contact" className="text-lg font-medium hover:text-primary">
              Contact
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
