"use client";

import React from "react";

//
import { SideNavGroup } from "@/types";
import { HomeIcon, Lightbulb, MessageCircle } from "lucide-react";
import { SidebarItem } from "./item";

const sidebarItemsGroups: SideNavGroup[] = [
  {
    title: "General",
    items: [
      {
        label: "Home",
        icon: HomeIcon,
        href: "/",
        type: "link",
      },
    ],
  },
  {
    title: "Communication",
    items: [
      {
        type: "link",
        href: "/contact-me",
        icon: MessageCircle,
        label: "Contact Me",
      },
      // {
      //   type: "link",
      //   href: "/suggestions",
      //   icon: Lightbulb,
      //   label: "Suggestions",
      // },
    ],
  },
];
//

type Props = {};

export default function SideNav({}: Props) {
  // remove items that are not for the current user type and remaining empty groups
  const filteredSidebarItemsGroups = sidebarItemsGroups.filter(
    (group) => group.items.length > 0
  );
  return (
    <div className=" overflow-auto flex flex-col   min-h-full ">
      <nav className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col space-y-1">
          {filteredSidebarItemsGroups.map((group, index) => (
            <div key={index}>
              <h3 className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-muted-foreground">
                    {group.title}
                  </div>
                </div>
              </h3>
              {group.items.map((item, i) => (
                <SidebarItem key={i} item={item} />
              ))}
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
}
