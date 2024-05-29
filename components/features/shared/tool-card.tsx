import React from "react";
import Link from "../../small/link-with-loader";
import { Tool } from "@/types";
import Image from "next/image";

type Props = Tool;

export default function ToolCard({ name, description, url, logoUrl }: Props) {
  return (
    <Link
      className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all  hover:shadow-xl dark:bg-gray-950 hover:ring-2 hover:ring-primary border"
      href={url}
    >
      <div className="flex h-32 items-center justify-center bg-[rgb(253,161,140)] overflow-hidden">
        <Image
        className="rounded-t-lg "
        src={logoUrl} alt={name} height={100} width={150}      />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold group-hover:underline ">{name}</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Link>
  );
}
