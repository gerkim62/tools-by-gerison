import getProcessedExamTimetable from "@/utils/timetable-processor";
import { tabletojson } from "tabletojson";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
export default async function uploadExamTimetable({
  html,
}: {
  html: string;
}): Promise<
  | never
  | {
      error: string;
    }
> {
  try {
    const uploaderName = "UEAB";

    if (html.length < 10) {
      return { error: "Invalid HTML Provided" };
    }

    const tablesAsJson = tabletojson.convert(html);

    const processedTimetable = getProcessedExamTimetable(tablesAsJson);

    if (processedTimetable.courses.length < 1) {
      return { error: "No courses found in the timetable" };
    }

    try {
      await prisma.$transaction(async (prisma) => {
        await Promise.all([
          prisma.examTimetable.deleteMany({}),
          prisma.examTimetableCourse.deleteMany({}),
        ]);
        console.log("Deleted existing exam timetable and course data");

        // Create the new timetable and its associated courses within the same transaction
        const timetable = await prisma.examTimetable.create({
          data: {
            uploaderName,
            semester: processedTimetable.semester,
            name: processedTimetable.name,
            courses: {
              create: processedTimetable.courses,
            },
          },
        });

        console.log("Saved timetable to database:", timetable.id);
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : JSON.stringify(error);
      console.error("Error saving timetable to database:", message);

      return { error: "Error saving timetable to database" };
    }
  } catch (error) {
    console.error("Error processing timetable:", error);

    return { error: "Error processing timetable" };
  }

  redirect("/exam-timetable?uploaded=true");
}
