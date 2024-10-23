import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetAccount = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["account", { id }],
    queryFn: async () => {
      const response = await client.api.accounts[":id"].$get({
        param: { id },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch account.");
      }

      if ("data" in result) {
        return result.data;
      }

      throw new Error("Unexpected response format");
    },
  });

  return query;
};
