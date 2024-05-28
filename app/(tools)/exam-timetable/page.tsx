/**
 * v0 by Vercel.
 * @see https://v0.dev/t/is1uNac5jUd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import Select from "@/components/features/select";
import { EyeIcon, TrashIcon } from "lucide-react";

export default function Component() {
  return (
    <>
      <div className="w-full min-h-screen  flex flex-col">
        <main className="flex-1 container mx-auto py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gradient text-center">
              Exam Timetable Extractor
            </h1>
            <p className="text-gray-600 dark:text-gray-400  text-center mb-4">
              Easily extract your UEAB exam timetable. No need to peruse a
              massive page PDF.
            </p>

            <div className="border shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4 text-center">
                Select Courses.{" "}
                <span className="hidden sm:inline">View Instantly!</span>{" "}
              </h2>
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="MATH101">
                      <div className="flex justify-between">
                        <span>MATH101 - Calculus I</span>
                        <span>3 credits</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="PHYS201">
                      <div className="flex justify-between">
                        <span>PHYS201 - Mechanics</span>
                        <span>4 credits</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="CHEM301">
                      <div className="flex justify-between">
                        <span>CHEM301 - Organic Chemistry</span>
                        <span>4 credits</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="CSCI150">
                      <div className="flex justify-between">
                        <span>CSCI150 - Introduction to Computer Science</span>
                        <span>3 credits</span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              <Select />
            </div>
            <div className="border shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                Exam Timetable
              </h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Code</TableHead>
                      <TableHead>Course Name</TableHead>
                      <TableHead>Start Time</TableHead>
                      <TableHead>End Time</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Venue</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>MATH101</TableCell>
                      <TableCell>Calculus I</TableCell>
                      <TableCell>9:00 AM</TableCell>
                      <TableCell>11:00 AM</TableCell>
                      <TableCell>2023-05-15</TableCell>
                      <TableCell>Dr. Jane Doe</TableCell>
                      <TableCell>Room 101</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost">
                            <EyeIcon className="h-5 w-5" />
                            <span className="sr-only">View Details</span>
                          </Button>
                          <Button size="sm" variant="ghost">
                            <TrashIcon className="h-5 w-5" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>PHYS201</TableCell>
                      <TableCell>Mechanics</TableCell>
                      <TableCell>1:00 PM</TableCell>
                      <TableCell>3:00 PM</TableCell>
                      <TableCell>2023-05-16</TableCell>
                      <TableCell>Dr. John Smith</TableCell>
                      <TableCell>Room 201</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost">
                            <EyeIcon className="h-5 w-5" />
                            <span className="sr-only">View Details</span>
                          </Button>
                          <Button size="sm" variant="ghost">
                            <TrashIcon className="h-5 w-5" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>CHEM301</TableCell>
                      <TableCell>Organic Chemistry</TableCell>
                      <TableCell>9:00 AM</TableCell>
                      <TableCell>12:00 PM</TableCell>
                      <TableCell>2023-05-17</TableCell>
                      <TableCell>Dr. Sarah Lee</TableCell>
                      <TableCell>Room 301</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost">
                            <EyeIcon className="h-5 w-5" />
                            <span className="sr-only">View Details</span>
                          </Button>
                          <Button size="sm" variant="ghost">
                            <TrashIcon className="h-5 w-5" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          <p className="text-sm text-center my-4">
            Last updated: 2023-05-10.{" "}
            <Link
              className="text-primary hover:underline underline"
              href="/contact-me"
            >
              Contact me
            </Link>{" "}
            to report any issues.
            <Button size="sm" variant="link" className="border ml-2">
              Is it up to date?
            </Button>
          </p>
        </main>
      </div>
      <Dialog defaultOpen>
        <DialogTrigger />
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Course Details</DialogTitle>
            <DialogDescription>
              View detailed information about the selected course.
            </DialogDescription>
          </DialogHeader>
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Course Code
                </h3>
                <p className="text-gray-600 dark:text-gray-400">MATH101</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Course Name
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Calculus I</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Start Time
                </h3>
                <p className="text-gray-600 dark:text-gray-400">9:00 AM</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  End Time
                </h3>
                <p className="text-gray-600 dark:text-gray-400">11:00 AM</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Date
                </h3>
                <p className="text-gray-600 dark:text-gray-400">2023-05-15</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Instructor
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Dr. Jane Doe</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Venue
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Room 101</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Credits
                </h3>
                <p className="text-gray-600 dark:text-gray-400">3</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <div>
              <Button variant="outline">Close</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
