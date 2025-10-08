import { AppSidebar } from "./desktop-sidebar"
import { NavbarMobile } from "./mobile-navbar"

export function ResponsiveNav() {
  return (
    <>
      {/* only for md and up */}
      <div className="hidden md:flex">
        <AppSidebar />
      </div>

      {/* only for small screens */}
      <NavbarMobile className="flex md:hidden" />
    </>
  );
}
