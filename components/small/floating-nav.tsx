/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5DOJr8TesE3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "@/components/small/link-with-loader";
import { CompassIcon } from "lucide-react";

export default function FloatingNav() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="group relative">
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 shadow-md transition-all duration-300 ease-in-out group-hover:bg-gray-800 group-hover:shadow-lg dark:bg-gray-50 dark:text-gray-900 dark:group-hover:bg-gray-200 dark:group-hover:shadow-lg">
          <CompassIcon className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
        </button>
        <div className="absolute bottom-0 right-0 mt-4 hidden w-max origin-bottom-right scale-0 flex-col items-end gap-2 rounded-md bg-white p-2 shadow-lg transition-all duration-300 ease-in-out group-hover:flex group-hover:scale-100 dark:bg-gray-950 dark:shadow-gray-800">
          <Link
            className="flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
            href="#"
          >
            Home
          </Link>
          <Link
            className="flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
            href="#"
          >
            About
          </Link>
          <Link
            className="flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
            href="#"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
