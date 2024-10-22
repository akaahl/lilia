"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNewAccount } from "@/features/accounts/hooks/useNewAccount";
import { Plus } from "lucide-react";
import { columns, Payment } from "./Columns";
import { DataTable } from "@/components/DataTable";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed534",
    amount: 50,
    status: "pending",
    email: "a@example.com",
  },
  {
    id: "728e982f",
    amount: 90,
    status: "pending",
    email: "z@example.com",
  },
  {
    id: "728ed545",
    amount: 70,
    status: "pending",
    email: "b@example.com",
  },
  // ...
];

export default function AccountsPage() {
  const { onOpen } = useNewAccount();

  return (
    <div className="max-w-screen-2xl mx-auto pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts page</CardTitle>
          <Button
            size="sm"
            onClick={onOpen}
          >
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            filterKey="email"
            onDelete={() => {}}
          />
        </CardContent>
      </Card>
    </div>
  );
}
