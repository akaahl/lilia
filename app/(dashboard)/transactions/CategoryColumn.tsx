import { useOpenCategory } from "@/features/categories/hooks/useOpenCategory";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

type Props = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

export default function CategoryColumn({ category, categoryId }: Props) {
  const { onOpen: onOpenCategory } = useOpenCategory();

  const handleClick = () => {
    if (!categoryId) return;
    onOpenCategory(categoryId);
  };

  return (
    <div
      onClick={handleClick}
      className={cn("flex items-center cursor-pointer hover:underline", !category && 'text-rose-500')}
    >
      {!category && <TriangleAlert className="mr-2 size-4 shrink-0" />}
      {category || "Uncategorized"}
    </div>
  );
}
