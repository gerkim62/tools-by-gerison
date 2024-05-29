/**
 * v0 by Vercel.
 * @see https://v0.dev/t/adf8aiqzGom
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import Link from "@/components/small/link-with-loader";
import { Button, buttonVariants } from "@/components/ui/button";

export default function ErrorScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-background">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
            Something went wrong
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            We are sorry, but an unexpected error has occurred. Please try
            refreshing the page or report the issue.
          </p>
        </div>
        <div className="flex w-full justify-center space-x-4">
          <Link
            className={buttonVariants({ variant: "link" })}
            href="/report-error"
          >
            Report an Error
          </Link>
          <Button onClick={()=>window.location.reload()}>Reload</Button>
        </div>
      </div>
    </div>
  );
}
