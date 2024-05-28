"use client";

import { Course } from "@prisma/client";
import { useTheme } from "next-themes";
import { useState, useTransition } from "react";
import ReactSelect, { MultiValue } from "react-select";

type Props = {};

export default function Select({}: Props) {
    const courses:Course[] = []
    function handleChange(selected: MultiValue<{ value: string; label: string }>) {
        setSelectedCourseCodes(selected.map((course) => course.value));
    }
  const [isPending, startTransition] = useTransition();

  const [selectedCourseCodes, setSelectedCourseCodes] = useState<string[]>([]);
  const darkModeStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "#020815",
      padding: "0.3rem",
    }),

    option: (provided: any) => ({
      ...provided,
      backgroundColor: "#020815",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#090930",
        cursor: "pointer",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      border: "1px solid #090930",
      overflow: "hidden",
      backgroundColor: "#020815",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      color: "#fff",
    }),
  };

  const { theme } = useTheme();

  const styles = theme === "dark"? darkModeStyles : {};

  return (
    <ReactSelect
      styles={styles}
      autoFocus
      onFocus={() => startTransition(() => {})}
      onInputChange={() => startTransition(() => {})}
      isLoading={isPending}
      // end of optimization
      isClearable={false}
      isMulti
      options={courses.map((course) => ({
        value: course.code,
        label: `${course.code} - ${course.name} (${course.group})`,
      }))}
      onChange={handleChange}
      className="basic-multi-select mt-2 w-full "
      classNamePrefix="select"
      placeholder="Search courses..."
    />
  );
}
