import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetTransaction = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["transaction", { id }],
    queryFn: async () => {
      const response = await client.api.transactions[":id"].$get({
        param: { id },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch transaction.");
      }

      if ("data" in result) {
        return result.data;
      }

      throw new Error("Unexpected response format");
    },
  });

  return query;
};
