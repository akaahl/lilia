import { SelectedColumnsState } from "./ImportCard";

type Props = {
  headers: string[];
  body: string[][];
  selectedColumns: Record<string, string | null>;
  onTableSelectChange: (columnIndex: number, value: string | null) => void;
};

export default function ImportTable({
  headers,
  body,
  selectedColumns,
  onTableSelectChange,
}: Props) {
  return (
    <div>
      <div></div>
    </div>
  );
}
