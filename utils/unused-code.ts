
// const processedTimetable = getProcessedTimetable(singleArray);
// console.log(processedTimetable.courses.length);
// // save the processed timetable to a file
// fs.writeFileSync(
//   "data/processed-timetable.json",
//   JSON.stringify(processedTimetable, null, 2)
// );

// // TODO: confirm that end time is later than start

// // check for duplicate course with same group and code

// const groupedIndexes = processedTimetable.courses.reduce(
//   (acc, course, index) => {
//     const key = course.code + "-" + course.group + "-" + course.name;

//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(index);
//     return acc;
//   },
//   {}
// );

// const duplicatedIndexes = Object.values(groupedIndexes).filter(
//   (indexArray) => indexArray.length > 1
// );

// const duplicatedArrays = duplicatedIndexes.map((indexArray) =>
//   indexArray.map((index) => processedTimetable.courses[index])
// );

// // console.log(duplicatedArrays);

// // save the duplicated courses to a file
// fs.writeFileSync(
//   "data/duplicated-courses.json",
//   JSON.stringify(duplicatedArrays, null, 2)
// );



// // console.log(timetableJson);

// function identifyTimetableObject(object: any) {
//     Object.entries(object).forEach(([key, value]) => {
//       if (typeof value !== "string") return console.log(`${key} is not a string`);
//       console.log(value);
//       const isTime = TIME_REGEX.test(value);
//       const isDate = DATE_REGEX.test(value);
//       const isCourseCode = COURSE_CODE_REGEX.test(value);
//       const isGroup = GROUP_REGEX.test(value);
//       const isSemester = SEMESTER_REGEX.test(value);
//       const isExamName = EXAM_NAME_REGEX.test(value);
  
//       if (isTime) console.log(`${value} is a time`);
//       if (isDate) console.log(`${value} is a date`);
//       if (isCourseCode) console.log(`${value} is a course code`);
//       if (isGroup) console.log(`${value} is a group`);
//       if (isSemester) console.log(`${value} is a semester`);
//       if (isExamName) console.log(`${value} is an exam name`);
//     });
//   }
  
//   const parsedTimetable = JSON.parse(timetableJson);
  
//   const singleArray = parsedTimetable;
  
//   // how  to flatten nested arrays
  
//   // singleArray.forEach((item: any) => {
//   //   identifyTimetableObject(item);
//   // });
  
//   export default identifyTimetableObject;