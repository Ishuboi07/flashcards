import { CustomDialog } from "@/components/CustomDialog";
import FloatingButton from "@/components/FloatingButton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";

export default function AdminPage() {
  return (
    // Add, remove, or edit the content inside the flashcard
    <div className="h-screen py-4 px-2">
      <div className="flex flex-col justify-center items-center gap-12">
        <h1 className="text-4xl">Admin Panel</h1>
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead>Questions</TableHead>
              <TableHead>Answers</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(15)].map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, error, quidem ducimus dolorem ullam quasi nulla
                  quaerat aliquid sapiente incidunt facilis est, at earum qui
                  rem saepe eos nam quos! {index + 1}
                </TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  harum libero eos expedita accusamus praesentium at quae
                  delectus neque dolore rerum perspiciatis aperiam iure eveniet
                  aspernatur non ipsum repellendus dolor! {index + 1}
                </TableCell>
                <TableCell>
                  <CustomDialog
                    buttonText="Save Changes"
                    titleText="Edit the question or answer"
                    deleteEnabled
                  >
                    <button className="">
                      <EllipsisVertical />
                    </button>
                  </CustomDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <FloatingButton>+</FloatingButton>
      </div>
    </div>
  );
}
