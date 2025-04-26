import MainNavigation from "@/components/Layouts/MainNavigation";
import MobileNavigation from "@/components/Layouts/MobileNavigation";
import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";
import AuthDropDown from "@/components/Layouts/AuthDropDown";
import { User } from "@/data/user";
import CardSheet from "@/components/Layouts/CardSheet";
function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
      <nav className="container mx-auto flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="mr-8 flex flex-1 items-center justify-end space-x-4 lg:mr-0">
          <CardSheet />
          <ModeToggle />

          <AuthDropDown user={User} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
