"use client";

import React from "react";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ExamTimetableCourse } from "@prisma/client";
import NothingHere from "../shared/nothing-here";

type Props = {
  allCourses: ExamTimetableCourse[];
};

export default function ExamTimetable({ allCourses }: Props) {
  // course showing in dialog
  const [showingDialogForCourse, setShowingDialogForCourse] =
    React.useState<ExamTimetableCourse | null>(null);
  const params = useSearchParams();
  const selectedCourseCodes = decodeURIComponent(
    params.get("selected_exam_course_codes") || ""
  ).split(",");

  const selectedCourses = allCourses.filter((course) =>
    selectedCourseCodes.includes(course.code)
  );

  if (selectedCourses.length === 0) {
    return (
      <NothingHere description="Select your courses to view your personal exam timetable here!" />
    );
  }

  return (
    <>
      {" "}
      <Table className="whitespace-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead className="border-b">Course</TableHead>
            <TableHead className="border-b">Time</TableHead>
            <TableHead className="border-b">Date</TableHead>
            <TableHead className="border-b">Group</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedCourses.map((course) => (
            <TableRow
              onClick={() => setShowingDialogForCourse(course)}
              key={course.id}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 border-b"
            >
              <TableCell className="max-w-[20ch]  truncate">
                {course.name} ({course.code})
              </TableCell>
              <TableCell>
                {course.start} - {course.end}
              </TableCell>
              <TableCell>{course.date}</TableCell>
              <TableCell>{course.group}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showingDialogForCourse && (
        <div className="max-w-[90vw]">
          <CourseDetailsDialog
            course={showingDialogForCourse}
            setShowingDialogForCourse={setShowingDialogForCourse}
          />
        </div>
      )}
    </>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b30YhF1Dp2j
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { getKeyFromCourseOthers } from "./getKeyFromCourseOthers";

type DialogProps = {
  course: ExamTimetableCourse;
  setShowingDialogForCourse: (course: ExamTimetableCourse | null) => void;
};
function CourseDetailsDialog({
  course,
  setShowingDialogForCourse,
}: DialogProps) {
  return (
    <Dialog
    defaultOpen
    onOpenChange={(open) => !open && setShowingDialogForCourse(null)}
  >
    <DialogTrigger asChild>
      <Button variant="outline">View Course Details</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>{course.name}</DialogTitle>
        <DialogDescription>
          {course.code}
          {getKeyFromCourseOthers(course, "Credit Hours") !== "N/A"
            ? `${getKeyFromCourseOthers(course, "Credit Hours")} credit hours`
            : ""}
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-6">
        <div className="grid sm:grid-cols-2 gap-1 sm:gap-4">
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">Start Time</div>
            <div>{course.start}</div>
          </div>
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">End Time</div>
            <div>{course.end}</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-1 sm:gap-4">
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">Rows</div>
            <div>{getKeyFromCourseOthers(course, "Rows")}</div>
          </div>
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">Date</div>
            <div>{course.date}</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-1 sm:gap-4">
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">Page Number</div>
            <div>{course.page}</div>
          </div>
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">Group</div>
            <div>{course.group}</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-1 sm:gap-4">
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">Building</div>
            <div>{getKeyFromCourseOthers(course, "Building")}</div>
          </div>
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">Venue</div>
            <div>{getKeyFromCourseOthers(course, "Venue")}</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-1 sm:gap-4">
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">Instructor</div>
            <div>{getKeyFromCourseOthers(course, "Instructor")}</div>
          </div>
          <div className="flex sm:flex-col gap-1">
            <div className="text-sm font-medium">Number of Students</div>
            <div>{getKeyFromCourseOthers(course, "Students Count")}</div>
          </div>
        </div>
      </div>
      <DialogFooter>
        <div>
          <Button
            onClick={() => setShowingDialogForCourse(null)}
            variant="ghost"
          >
            Close
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  
  );
}
