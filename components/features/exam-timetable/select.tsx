"use client";

import React, { useEffect, useState } from "react";
import Select from "../shared/select";
import { ExamTimetableCourse } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MultiValue } from "react-select";

type Props = {
  courses: ExamTimetableCourse[];
};

export default function ExamTimetableSelect({ courses }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectedCourseCodes, setSelectedCodes] = useState<string[]>(
    decodeURIComponent(searchParams.get("selected_exam_course_codes") || "")
      .split(",")
      .filter(Boolean)
  );

  useEffect(() => {
    setSelectedCodes(
      decodeURIComponent(
        searchParams.get("selected_exam_course_codes") || ""
      ).split(",")
    );
  }, [searchParams]);
  return (
    <Select
      defaultValue={selectedCourseCodes.map((code) => ({
        value: code,
        label: courses.find((course) => course.code === code)?.name,
      }))}
      placeholder="Enter course name or code..."
      isMulti
      options={courses.map((course) => ({
        value: course.code,
        label: `${course.code} - ${course.name} (${course.group})`,
      }))}
      // controlShouldRenderValue={false}
      onChange={(newValues) => {
        const codes = (
          newValues as MultiValue<{
            value: string;
            label: string;
          }>
        ).map((value) => value.value);
        console.log(codes);
        const params = new URLSearchParams(searchParams);
        params.set("selected_exam_course_codes", codes.join(","));
        router.replace(`${pathname}?${params.toString()}`, {
          scroll: false,
        });
      }}
    />
  );
}
