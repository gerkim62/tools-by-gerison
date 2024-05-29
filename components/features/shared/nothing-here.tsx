import { SmileIcon } from "lucide-react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KA5ALPUeUKW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

type Props = {
  title?: string;
  description?: string;
};

export default function NothingHere({
  title = "Nothing to show here yet",
  description = "Sit back and relax, we're just getting started!",
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
      <div className="bg-gray-100 p-4 rounded-full dark:bg-gray-800">
        <SmileIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
