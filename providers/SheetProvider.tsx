"use client";

import NewAccountSheet from "@/features/accounts/components/NewAccountSheet";
import { useMountedState } from "react-use";

export default function SheetProvider() {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewAccountSheet />
    </>
  );
}
