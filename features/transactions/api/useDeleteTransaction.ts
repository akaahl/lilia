import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.transactions)[":id"]["$delete"]
>;

export const useDeleteTransaction = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      if (!id) throw new Error("Transaction ID is required");
      const response = await client.api.transactions[":id"]["$delete"]({
        param: { id },
      });
      if (!response.ok) {
        const errorData = await response.json();
        if (typeof errorData === "object" && "error" in errorData) {
          throw new Error(errorData.error || "Failed to delete transaction");
        } else {
          throw new Error("Failed to delete transaction");
        }
      }
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Transaction deleted");
      queryClient.invalidateQueries({ queryKey: ["transaction", { id }] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
    },
    onError: (error) => {
      console.error("Delete transaction error:", error);
      toast.error(error.message || "Failed to delete transaction");
    },
  });

  return mutation;
};
