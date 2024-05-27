"use client";

import Link from "@/components/small/link-with-loader";
import { SideNavItem } from "@/types";
import { usePathname } from "next/navigation";
import React from "react";

export function SidebarItem({ item }: { item: SideNavItem }) {
  const pathname = usePathname();
  const Icon = item.icon;

  const commonClasses =
    "relative rounded flex flex-row items-center h-10 focus:outline-none hover:bg-muted/50 border-l-4 border-transparent hover:border-border hover:border hover:border-l-4 pr-6 cursor-pointer transition-colors duration-200 ease-in-out";
  const isActive =
    item.active || (item.type === "link" && pathname.startsWith(item.href));
  const activeClasses = isActive ? " bg-accent/50 !border-border " : "";

  const renderBadge = () =>
    item.badge && (
      <span className="p-1 ml-auto text-xs font-medium tracking-wide bg-green-500 rounded-full aspect-square"></span>
    );

  const renderContent = () => (
    <>
      <span className="inline-flex justify-center items-center ml-4">
        <Icon />
      </span>
      <span className="ml-2 text-sm tracking-wide truncate">{item.label}</span>
      {renderBadge()}
    </>
  );

  if (item.type === "link") {
    return (
      <li className="my-1">
        <Link href={item.href} className={commonClasses + activeClasses}>
          {renderContent()}
        </Link>
      </li>
    );
  }

  if (item.type === "modal") {
    const Modal = item.modal;
    return (
      <li className="my-1">
        <Modal>
          <div className={commonClasses + activeClasses}>{renderContent()}</div>
        </Modal>
      </li>
    );
  }

  if (item.type === "button") {
    return (
      <li className="my-1">
        <button
          className={commonClasses + activeClasses}
          onClick={item.onClick}
        >
          {renderContent()}
        </button>
      </li>
    );
  }

  return null; // should never reach here
}
