/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cAz8l17S5tJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link";
import UploadExamTimetable from "@/components/forms/upload-exam-timetable";

export default function Component() {
  return (
    <section className="w-[90%] max-w-md mx-auto py-12 md:py-24 ">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Upload Exam Timetable</h1>
        <p className="text-gray-500 dark:text-gray-400 ">
          Upload converted UEAB Exam Timetable. Only .html files are allowed.
        </p>
      </div>
      <div className="mt-8 space-y-4">
        <UploadExamTimetable />
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4">
          <h3 className="text-lg font-medium mb-2">Convert PDF to HTML</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Download the latest PDF timetable that was sent in your UEAB email.
            Go to the{" "}
            <Link
              target="_blank"
              className="text-green-400 font-bold hover:underline"
              href="https://xodo.com/convert-pdf-to-html"
            >
              Xodo Converter website
            </Link>{" "}
            and use it to convert the PDF to HTML. Then, upload the HTML file
            here. The previous timetable will be deleted from the database.
          </p>
        </div>
      </div>
    </section>
  );
}
