import { Tool } from "@/types";

const app = {
  name: "CuteTools",
  description:
    "UEAB Tools is a collection of tools to help students at the University of Eastern Africa, Baraton.",
  version: "1.0.0",
};

const tools: Tool[] = [
  {
    name: "Calendify",
    description:
      "Scans your E-Learning portal for due assignments, quizzes, discussions, and more and sends you a Notification immediately.",
    url: "https://calendify.vercel.app/",
    logoUrl:
      "https://raw.githubusercontent.com/gerkim62/moodle-calendar/main/public/calendify.png",
  },
  {
    name: "Exam Timetable",
    description:
      "View your personal exam timetable here! Easily extract your UEAB exam timetable. No need to peruse a massive page PDF.",
    logoUrl: "/img/exam-timetable/logo.jpeg",
    url: "/exam-timetable",
  },
];

export { app, tools };
