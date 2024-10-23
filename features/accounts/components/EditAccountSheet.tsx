import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import AccountForm from "./AccountForm";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateAccount } from "../api/useCreateAccount";
import { useOpenAccount } from "../hooks/useOpenAccount";
import { useGetAccount } from "../api/useGetAccount";

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export default function EditAccountSheet() {
  const { isOpen, onClose, id } = useOpenAccount();
  const accountQuery = useGetAccount(id);

  const { mutate, isPending } = useCreateAccount();

  const handleSubmit = (values: FormValues) => {
    mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const defaultValues = accountQuery.data
    ? {
        name: accountQuery.data.name,
      }
    : {
        name: "",
      };

  return (
    <Sheet
      open={isOpen}
      onOpenChange={onClose}
    >
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={handleSubmit}
          disabled={isPending}
          defaultValues={defaultValues}
        />
      </SheetContent>
    </Sheet>
  );
}
