"use client";

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import SubmitButton from "../small/submit-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UploadExamTimetableFormSchema from "@/schemas/forms/upload-exam-timetable";
import { z } from "zod";
import { toast } from "sonner";
import { uploadExamTimetable } from "@/actions";

type Props = {};

export default function UploadExamTimetable({}: Props) {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
  } = useForm<z.infer<typeof UploadExamTimetableFormSchema>>({
    mode: "all",
    resolver: zodResolver(UploadExamTimetableFormSchema),
  });

  async function upload({
    examTimetable,
  }: z.output<typeof UploadExamTimetableFormSchema>) {
    // check if the file is an HTML file instance
    if (!(examTimetable instanceof File)) {
      return toast.error("Invalid file");
    }

    const htmlString = await examTimetable.text();

    await uploadExamTimetable({ html: htmlString });
  }

  return (
    <form onSubmit={handleSubmit(upload)} className="grid gap-1.5">
      <Label htmlFor="file">HTML File</Label>
      <div className="flex items-center space-x-2">
        <Input
          accept=".html"
          id="file"
          type="file"
          {...register("examTimetable")}
        />
        <SubmitButton
          isLoading={isSubmitting}
          disabled={!isValid || isSubmitting}
        >
          Upload
        </SubmitButton>
      </div>
      {typeof errors.examTimetable?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.examTimetable.message}</p>
      )}
    </form>
  );
}
