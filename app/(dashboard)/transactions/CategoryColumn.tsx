import { useOpenCategory } from "@/features/categories/hooks/useOpenCategory";

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
      className="flex items-center cursor-pointer hover:underline"
    >
      {category || "Uncategorized"}
    </div>
  );
}
