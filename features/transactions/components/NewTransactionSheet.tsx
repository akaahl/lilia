import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewTransaction } from "../hooks/useNewTransaction";
import TransactionForm from "./TransactionForm";
import { insertTransactionsSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateTransaction } from "../api/useCreateTransaction";

const formSchema = insertTransactionsSchema.omit({
  id: true,
});

type FormValues = z.input<typeof formSchema>;

export default function NewTransactionSheet() {
  const { isOpen, onClose } = useNewTransaction();

  const { mutate, isPending } = useCreateTransaction();

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
          <SheetTitle>New Transaction</SheetTitle>
          <SheetDescription>Add a new transaction.</SheetDescription>
        </SheetHeader>
        <p>Todo: Transaction Form</p>
      </SheetContent>
    </Sheet>
  );
}
