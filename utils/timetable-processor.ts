// read the json from "data/timetable.json" using fs
// and identify the object type of the timetable object
import fs from "fs";

import {
  COURSE_CODE_REGEX,
  DATE_REGEX,
  EXAM_NAME_REGEX,
  GROUP_REGEX,
  SEMESTER_REGEX,
  TIME_REGEX,
} from "./regexes";
import { ProcessedCourse, ProcessedTimetable } from "@/types";

const timetableJson = fs.readFileSync("data/timetable.json", "utf8");

const OTHERS_KEYS = [
  "Instructor",
  "Building",
  "Venue",
  "Rows",
  "Students Count",
  "Credit Hours",
];

function getProcessedTimetable(timetableObjectsPages: unknown[][]) {
  let lastValidDate: string | undefined = undefined;

  const processedTimetable: ProcessedTimetable = {
    semester: "",
    name: "",
    courses: [],
  };

  for (let i = 0; i < timetableObjectsPages.length; i++) {
    const timetableObjects = timetableObjectsPages[i];

    for (const timetableObject of timetableObjects as unknown[]) {
      const course: ProcessedCourse = {
        name: "",
        code: "",
        start: "",
        end: "",
        date: "",
        page: i + 1,
        group: "",
        others: [],
      };

      const extraData: string[] = [];

      if (typeof timetableObject !== "object" || !timetableObject) {
        console.log(
          "Invalid timetable object detected. Skipping.",
          timetableObject
        );
        continue;
      }

      let lastEntryWasCode: boolean | undefined = undefined;
      Object.entries(timetableObject).forEach(([key, value]) => {
        if (lastEntryWasCode && typeof value === "string") course.name = value;

        const isTime = TIME_REGEX.test(value);
        const isDate = DATE_REGEX.test(value);
        const isCourseCode = COURSE_CODE_REGEX.test(value);
        const isGroup = GROUP_REGEX.test(value);
        const isSemester = SEMESTER_REGEX.test(value);
        const isExamName = EXAM_NAME_REGEX.test(value);

        if (isTime) {
          const [start, end] = value.split("-");

          if (course.start === "") {
            course.start = start;
            course.end = end || "";
          } else course.end = value;
        } else if (isDate) {
          course.date = value;
          lastValidDate = value;
        } else if (isCourseCode) {
          course.code = value;
          lastEntryWasCode = true;
        } else if (isGroup) course.group = value;
        else if (isSemester) processedTimetable.semester = value;
        else if (isExamName) processedTimetable.name = value;
        else if (!lastEntryWasCode && course.code) {
          extraData.push(value);
        }

        if (!isCourseCode) {
          lastEntryWasCode = false;
        }

        if (course.code === "RELB350") {
          console.log(timetableObject);
        }
      });

      if (course.date === "") {
        if (lastValidDate) course.date = lastValidDate;
        else {
          console.log(
            "Course did not have a date and no previous date was found"
          );
          console.log(course);
        }
      }

      if (course.code !== "") {
        extraData.forEach((other) => {
          const otherObject = {
            [OTHERS_KEYS[extraData.indexOf(other)]]: other,
          };
          // console.log(otherObject);

          course.others.push(otherObject);
        });
        processedTimetable.courses.push(course);

        if (course.start === "") {
          // console.log("Course ", course, " has no start time");
        }
      }
      // else console.log("not adding ", course, " as it lacks code");
    }
  }

  // console.log(processedTimetable);
  return processedTimetable;
}

export default getProcessedTimetable;
