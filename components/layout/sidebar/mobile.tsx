"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import SideNav from "./nav";
import { Button } from "../../ui/button";
import HomePageLink from "@/components/small/home-page-link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileSidebar({}: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="!px-0 overflow-y-auto">
          <div className="space-y-4 py-4 ">
            <div className="px-3 py-2 -mt-8 ">
              <div className="mx-5 mb-4  flex">
                <HomePageLink />
              </div>
              <div className="space-y-1">
                <SideNav />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
