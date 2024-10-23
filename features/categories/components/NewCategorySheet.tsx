import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateCategory } from "../api/useCreateCategory";
import CategoryForm from "./CategoryForm";
import { useNewCategory } from "../hooks/useNewCategory";

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export default function NewCategorySheet() {
  const { isOpen, onClose } = useNewCategory();

  const { mutate, isPending } = useCreateCategory();

  const handleSubmit = (values: FormValues) => {
    mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet
      open={isOpen}
      onOpenChange={onClose}
    >
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Category</SheetTitle>
          <SheetDescription>
            Create a new category to track your transactions.
          </SheetDescription>
        </SheetHeader>
        <CategoryForm
          onSubmit={handleSubmit}
          disabled={isPending}
          defaultValues={{
            name: "",
          }}
        />
      </SheetContent>
    </Sheet>
  );
}
