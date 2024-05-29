import { ExamTimetableCourse } from "@prisma/client";

export function getKeyFromCourseOthers(
  course: ExamTimetableCourse,
  key: string
): string {
  if (!course || !Array.isArray(course.others)) {
    return "N/A";
  }

  for (let i = 0; i < course.others.length; i++) {
    const other = course.others[i];
    if (typeof other !== "object" || !other || Array.isArray(other)) {
      continue;
    }
    if (other[key]) {
      if (typeof other[key] === "string") {
        // who can tell me why this is not working without the type assertion?
        return other[key] as string;
      }
    }

    // if last element and still no key value return "N/A"
    if (i === course.others.length - 1) {
      return "N/A";
    }
  }

  return "N/A"; // default return value if all other checks fail
}
