"use client";

import qs from "query-string";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useGetAccounts } from "@/features/accounts/api/useGetAccounts";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetSummary } from "@/features/summary/api/useGetSummary";

export default function AccountFilter() {
  const router = useRouter();
  const pathname = usePathname();

  const params = useSearchParams();
  const accountId = params.get("accountId") || "all";
  const from = params.get("from") || "";
  const to = params.get("to") || "";

  const { isLoading: isLoadingSummary } = useGetSummary();
  const { data: accounts, isLoading: isLoadingAccounts } = useGetAccounts();

  const handleValueChange = (newValue: string) => {
    const query = {
      accountId: newValue,
      from,
      to,
    };

    if (query.accountId === "all") {
      return (query.accountId = "");
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      {
        skipNull: true,
        skipEmptyString: true,
      },
    );

    router.push(url);
  };

  return (
    <Select
      value={accountId}
      onValueChange={handleValueChange}
      disabled={isLoadingAccounts || isLoadingSummary}
    >
      <SelectTrigger
        className="lg:w-auto w-full h-9 rounded-md px-3 font-normal bg-white/10 
      hover:bg-white/20 hover:text-white border-none focus:ring-offset-0 focus:ring-transparent
        outline-none text-white focus:bg-white/30 transition"
      >
        <SelectValue placeholder="Select account" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="all"
          className="mr-4"
        >
          All accounts
        </SelectItem>
        {accounts?.map((account) => (
          <SelectItem
            key={account.id}
            value={account.id}
            className="mr-4"
          >
            {account.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
