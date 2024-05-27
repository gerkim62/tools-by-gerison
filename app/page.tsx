/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1dgQODTT4nM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <>
      <section className="w-full py-6 pt-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gradient">
                Cute Tools for Students
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                A collection of tools to help university students succeed,
                created by developer.gerison.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12  bg-gray-100 dark:bg-gray-900">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
          <Link
            className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-950"
            href="#"
          >
            <div className="flex h-32 items-center justify-center bg-gray-100 dark:bg-gray-900">
              <CalendarDaysIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:underline">
                Calendar
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Stay on top of your schedule with our powerful calendar tool.
              </p>
            </div>
          </Link>
          <Link
            className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-950"
            href="#"
          >
            <div className="flex h-32 items-center justify-center bg-gray-100 dark:bg-gray-900">
              <NotebookIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:underline">
                Notes
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Organize your thoughts and ideas with our intuitive note-taking
                app.
              </p>
            </div>
          </Link>
          <Link
            className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-950"
            href="#"
          >
            <div className="flex h-32 items-center justify-center bg-gray-100 dark:bg-gray-900">
              <BookOpenIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:underline">
                Reading List
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Keep track of your reading assignments and personal book list.
              </p>
            </div>
          </Link>
          <Link
            className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-950"
            href="#"
          >
            <div className="flex h-32 items-center justify-center bg-gray-100 dark:bg-gray-900">
              <BarChartIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:underline">
                Grade Tracker
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Monitor your academic progress with our intuitive grade tracking
                tool.
              </p>
            </div>
          </Link>
          <Link
            className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-950"
            href="#"
          >
            <div className="flex h-32 items-center justify-center bg-gray-100 dark:bg-gray-900">
              <ClipboardListIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:underline">
                To-Do List
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Stay organized and on top of your tasks with our powerful to-do
                list.
              </p>
            </div>
          </Link>
          <Link
            className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-950"
            href="#"
          >
            <div className="flex h-32 items-center justify-center bg-gray-100 dark:bg-gray-900">
              <PencilIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:underline">
                Study Planner
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Create personalized study plans to maximize your learning
                efficiency.
              </p>
            </div>
          </Link>
          <Link
            className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-950"
            href="#"
          >
            <div className="flex h-32 items-center justify-center bg-gray-100 dark:bg-gray-900">
              <LineChartIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:underline">
                Project Planner
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Manage your group projects and assignments with our
                comprehensive project planning tool.
              </p>
            </div>
          </Link>
          <Link
            className="group relative block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-950"
            href="#"
          >
            <div className="flex h-32 items-center justify-center bg-gray-100 dark:bg-gray-900">
              <BeakerIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:underline">
                Lab Notebook
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Record your lab experiments and observations with our digital
                lab notebook.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ClipboardListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function NotebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </svg>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}
