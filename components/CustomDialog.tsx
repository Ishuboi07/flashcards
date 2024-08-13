import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";

export function CustomDialog({
  children,
  buttonText,
  titleText,
  deleteEnabled,
}: {
  children: React.ReactNode;
  buttonText: string;
  titleText: string;
  deleteEnabled?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{titleText}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Question
            </Label>
            <Textarea id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Answer
            </Label>
            <Textarea id="name" className="col-span-3" />
          </div>
        </div>
        <DialogFooter className="flex justify-between">
          {deleteEnabled && (
            <Button variant="destructive" type="button">
              Delete
            </Button>
          )}
          <Button type="submit">{buttonText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
