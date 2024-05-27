import React from "react";
import Link from "../small/link-with-loader";
import { CalendarDaysIcon } from "lucide-react";

type Props = {};

export default function ToolCard({}: Props) {
  return  <Link
  className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all  hover:shadow-xl dark:bg-gray-950 hover:ring-2 hover:ring-primary border"
  href="#"
>
  <div className="flex h-32 items-center justify-center bg-gray-100 dark:bg-gray-900">
    <CalendarDaysIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold group-hover:underline ">
      Calendar
    </h3>
    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Stay on top of your schedule with our powerful calendar tool.
    </p>
  </div>
</Link>
}
