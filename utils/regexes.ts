const COURSE_CODE_REGEX = /^[A-Z]{4}[0-9]{3}$/;
const TIME_REGEX = /^[0-9]{2}[:\.][0-9]{2}\s*[AP]M.*$/;
const GROUP_REGEX = /^(MAIN|GROUP [A-Za-z])$/i;
const DATE_REGEX = /^[A-Z][a-z]{2},+\s*\d{2}-\d{2}-\d{4}\s*$/;
const SEMESTER_REGEX = /^[0-9]{4}\/[0-9]{4}\.[1-9]$/;
const EXAM_NAME_REGEX = /.*(?:exam).*timetable.*/i;

export {
  COURSE_CODE_REGEX,
  TIME_REGEX,
  GROUP_REGEX,
  DATE_REGEX,
  SEMESTER_REGEX,
  EXAM_NAME_REGEX,
};
