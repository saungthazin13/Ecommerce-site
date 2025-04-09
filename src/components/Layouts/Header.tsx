import MainNavigation from "@/components/Layouts/MainNavigation";
import MobileNavigation from "@/components/Layouts/MobileNavigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
      <nav className="container mx-auto flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="mr-8 flex flex-1 items-center justify-end space-x-4 lg:mr-0">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
