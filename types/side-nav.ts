
import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

type BaseSideNavItem = {
  type: string;
  label: string;
  icon: LucideIcon;
  badge?: boolean;
  active?: boolean;
};

type SideNavModalItem = BaseSideNavItem & {
  type: "modal";
  modal: ComponentType<any>;
};

type SideNavLinkItem = BaseSideNavItem & {
  type: "link";
  href: string;
};

type SideNavButtonItem = BaseSideNavItem & {
  type: "button";
  onClick: () => void;
};

export type SideNavItem =
  | SideNavModalItem
  | SideNavLinkItem
  | SideNavButtonItem;

export type SideNavGroup = {
  title: string;
  items: SideNavItem[];
};
