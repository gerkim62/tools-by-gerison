type ProcessedExamCourse = {
  name: string;
  code: string;
  start: string;
  end: string;
  date: string;
  page: number;
  group: string;
  others: {
    [key: string]: string;
  }[];
};

type ProcessedExamTimetable = {
  semester: string;
  name: string;
  courses: ProcessedExamCourse[];
};

export type { ProcessedExamCourse, ProcessedExamTimetable };
