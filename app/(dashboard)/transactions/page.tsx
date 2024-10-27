"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Plus } from "lucide-react";
import { columns } from "./Columns";
import { DataTable } from "@/components/DataTable";
import { Skeleton } from "@/components/ui/skeleton";
import { useNewTransaction } from "@/features/transactions/hooks/useNewTransaction";
import { useGetTransactions } from "@/features/transactions/api/useGetTransactions";
import { useBulkDeleteTransactions } from "@/features/transactions/api/useBulkDelete";
import { useState } from "react";
import UploadButton from "./UploadButton";
import ImportCard from "./ImportCard";
import { transactions as transactionSchema } from "@/db/schema";
import { useSelectAccount } from "@/hooks/useSelectAccount";

enum VARIANTS {
  list = "LIST",
  import = "IMPORT",
}

const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {},
};

export default function TransactionsPage() {
  const [AccountDialog, confirm] = useSelectAccount();
  const [variant, setVariant] = useState<VARIANTS>(VARIANTS.list);
  const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS);

  const { onOpen } = useNewTransaction();
  const transactionsQuery = useGetTransactions();
  const deleteTransactions = useBulkDeleteTransactions();
  const transactions = transactionsQuery.data || [];

  const disabled = deleteTransactions.isPending || transactionsQuery.isLoading;

  const handleUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {
    setImportResults(results);
    setVariant(VARIANTS.import);
  };

  const handleCancel = () => {
    setImportResults(INITIAL_IMPORT_RESULTS);
    setVariant(VARIANTS.list);
    console.log("cancel", variant, importResults);
  };

  const onSubmitImport = async (
    values: (typeof transactionSchema.$inferInsert)[],
  ) => {};

  if (transactionsQuery.isLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto pb-10 -mt-24">
        <Card className="border-none drop-shadow-sm">
          <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Loader2 className="size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === VARIANTS.import) {
    return (
      <>
        <AccountDialog />
        <ImportCard
          data={importResults.data}
          onCancel={handleCancel}
          onSubmit={() => {}}
        />
      </>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Transactions history
          </CardTitle>
          <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">
            <Button
              size="sm"
              onClick={onOpen}
              className="w-full lg:w-auto"
            >
              <Plus className="size-4 mr-2" />
              Add new
            </Button>
            <UploadButton onUpload={handleUpload} />
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={transactions}
            filterKey="payee"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteTransactions.mutate({ ids });
            }}
            disabled={disabled}
          />
        </CardContent>
      </Card>
    </div>
  );
}
