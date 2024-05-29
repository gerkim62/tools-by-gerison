"use client";

import { useTheme } from "next-themes";
import { ComponentProps, useTransition } from "react";
import ReactSelect from "react-select";

type Props = ComponentProps<typeof ReactSelect>;

export default function Select(props: Props) {
  const [isPending, startTransition] = useTransition();

  const darkModeStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "#020815",
      padding: "0.1rem",
      borderRadius: "0.5rem",
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

  const styles = theme === "dark" ? darkModeStyles : {};

  return (
    <ReactSelect
      styles={styles}
      autoFocus
      onFocus={() => startTransition(() => {})}
      onInputChange={() => startTransition(() => {})}
      isLoading={isPending}
      // end of optimization
      isClearable={false}
      className="select mt-2 w-full "
      {...props}
    />
  );
}
