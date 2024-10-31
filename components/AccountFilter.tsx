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

export default function AccountFilter() {
  const { data: accounts, isLoading: isLoadingAccounts } = useGetAccounts();

  return (
    <Select
      value=""
      onValueChange={() => {}}
      disabled={false}
    >
      <SelectTrigger
        className="lg:w-auto w-full h-9 rounded-md px-3 font-normal bg-white/10 
      hover:bg-white/20 hover:text-white border-none focus:ring-offset-0 focus:ring-transparent
        outline-none text-white focus:bg-white/30 transition"
      >
        <SelectValue placeholder="Account" />
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
