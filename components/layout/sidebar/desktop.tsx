import { cn } from "@/lib/utils";
import SideNav from "./nav";

export default function DesktopSidebar() {
  return (
    <div
      className={cn(
        `relative hidden h-screen border-r  lg:block w-72 overflow-y-auto`
      )}
    >
      <div className="space-y-4 py-4 pt-0">
        <div className="px-3 py-2 ">
          <div className="space-y-1 ">
            <SideNav />
          </div>
        </div>
      </div>
    </div>
  );
}
