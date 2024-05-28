type ProcessedCourse = {
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

type ProcessedTimetable = {
  semester: string;
  name: string;
  courses: ProcessedCourse[];
};

export type { ProcessedCourse, ProcessedTimetable };
