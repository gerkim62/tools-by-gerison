import { z } from "zod";

const UploadExamTimetableFormSchema = z.object({
  // must be .html, non-empty,
  examTimetable:
    typeof window === "undefined"
      ? z.unknown()
      : z
          .instanceof(FileList)

          // check if empty
          .refine((fileList) => fileList.length > 0, {
            message: "No file selected",
          })
          .refine((file) => file[0].name.endsWith(".html"), {
            message: "File must be an HTML file (.html)",
          })
          .refine((file) => file[0].size > 0, {
            message: "Selected file has no content",
          })
          // store the first file in the list as the file
          .transform((fileList) => fileList[0]),
});

export default UploadExamTimetableFormSchema;
