import getProcessedTimetable from "@/utils/timetable-processor";
import { tabletojson } from "tabletojson";
// import fs from "fs";
import prisma from "@/utils/prisma";
export default async function uploadExamTimetable({ html }: { html: string }) {
  try {
    const uploaderName = "UEAB";

    if (html.length < 10) {
      throw new Error("Invalid HTML file provided");
    }

    const tablesAsJson = tabletojson.convert(html);

    //save the tables as JSON file
    // fs.writeFileSync(
    //   "data/timetable.json",
    //   JSON.stringify(tablesAsJson, null, 2)
    // );

    const processedTimetable = getProcessedTimetable(tablesAsJson);

    // save as JSON file
    // fs.writeFileSync(
    //   "data/final-timetable.json",
    //   JSON.stringify(processedTimetable, null, 2)
    // );

    // console.log(processedTimetable);

    const withoutStartOrEnd = processedTimetable.courses.filter(
      (course) => !course.start || !course.end
    );

    // save the courses without start or end time to a file
    // fs.writeFileSync(
    //   "data/without-start-or-end.json",
    //   JSON.stringify(withoutStartOrEnd, null, 2)
    // );

    if (processedTimetable.courses.length < 1) {
      throw new Error("No courses found in the timetable");
    }

    try {
      await prisma.$transaction(async (prisma) => {
        // Begin the transaction
        // Delete the timetable first
        await prisma.timetable.deleteMany({});

        // Create the new timetable and its associated courses within the same transaction
        const timetable = await prisma.timetable.create({
          data: {
            uploaderName,
            semester: processedTimetable.semester,
            name: processedTimetable.name,
            courses: {
              create: processedTimetable.courses,
            },
          },
        });

        console.log(timetable);
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : JSON.stringify(error);
      throw new Error("Error saving timetable to database. " + message);
    }
  } catch (error) {
    // Handle validation errors
    console.error("Validation error:", error);
    // You may throw an error or return false or any other way you handle errors in your application
  }
}
