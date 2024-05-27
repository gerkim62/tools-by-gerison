import { cn } from "@/lib/utils";
import HomePageLink from "../small/home-page-link";
import ThemeToggle from "./theme-toggle";
import { MobileSidebar } from "./sidebar/mobile";

export default function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-50">
      <nav className="h-16 flex items-center justify-between px-4">
        <div className="flex gap-2 justify-center items-center flex-row-reverse">
          <HomePageLink />
          <div className={cn("block lg:!hidden")}>
            <MobileSidebar />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* <UserButton /> */}
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
