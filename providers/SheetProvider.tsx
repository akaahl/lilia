"use client";

import EditAccountSheet from "@/features/accounts/components/EditAccountSheet";
import NewAccountSheet from "@/features/accounts/components/NewAccountSheet";
import EditCategorySheet from "@/features/categories/components/EditCategorySheet";
import NewCategorySheet from "@/features/categories/components/NewCategorySheet";
import { useMountedState } from "react-use";

export default function SheetProvider() {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <EditAccountSheet />
      <NewAccountSheet />
      <EditCategorySheet />
      <NewCategorySheet />
    </>
  );
}
