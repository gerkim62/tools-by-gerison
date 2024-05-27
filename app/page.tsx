/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1dgQODTT4nM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import ToolCard from "@/components/features/tool-card";

export default function Component() {
  const tools = Array.from({ length: 6 }, (_, i) => ({
    href: "#",
    label: "Tool " + (i + 1),
  }));
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
          {tools.map((tool, i) => (
            <ToolCard key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
