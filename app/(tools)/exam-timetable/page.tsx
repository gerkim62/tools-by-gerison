/**
 * v0 by Vercel.
 * @see https://v0.dev/t/is1uNac5jUd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

import { Button } from "@/components/ui/button";

import prisma from "@/lib/prisma";
import ExamTimetableSelect from "@/components/features/exam-timetable/select";
import NothingHere from "@/components/features/shared/nothing-here";
import ExamTimetable from "@/components/features/exam-timetable/timetable";

export default async function ExamTimetablePage() {
  const examTimetable = await prisma.examTimetable.findFirst({
    include: {
      courses: true,
    },
  });

  console.log(examTimetable?.courses);

  if (!examTimetable?.courses)
    return <NothingHere title="Timetable Not Available" />;

  return (
    <>
      <div className="w-full min-h-screen  flex flex-col">
        <main className="flex-1 container mx-auto py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gradient text-center">
              Exam Timetable Extractor
            </h1>
            <p className="text-gray-600 dark:text-gray-400  text-center mb-4">
              Easily extract your UEAB exam timetable. No need to peruse a
              massive page PDF.
            </p>

            <div className="border shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50  text-center">
                Select Courses.{" "}
                <span className="hidden sm:inline">View Instantly!</span>{" "}
              </h2>
              <p className="text-sm text-center mb-4">
                Last updated:{" "}
                {new Date(examTimetable.createdAt).toLocaleDateString("en-UK")}.{" "}
                <Link
                  className="text-primary hover:underline underline"
                  href="/contact-me"
                >
                  Contact me
                </Link>{" "}
                to report any issues.
              </p>

              <ExamTimetableSelect courses={examTimetable.courses} />
            </div>
            <div className="border shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold text-muted-foreground mb-4 text-center">
                Personal Exam Timetable
              </h2>
              <div className="overflow-x-auto">
                <ExamTimetable allCourses={examTimetable.courses} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
