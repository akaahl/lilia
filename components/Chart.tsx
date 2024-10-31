import { AreaChart, BarChart, FileSearch, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import AreaVariant from "./AreaVariant";
import BarVariant from "./BarVariant";
import LineVariant from "./LineVariant";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  data?: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export default function Chart({ data = [] }: Props) {
  const [chartType, setChartType] = useState<string>("area");

  const handleChartTypeChange = (type: string) => {
    setChartType(type);
  };

  return (
    <Card className="drop-shadow-sm border-none">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
        <CardTitle className="text-xl line-clamp-1">Transactions</CardTitle>
        <Select
          defaultValue={chartType}
          onValueChange={handleChartTypeChange}
        >
          <SelectTrigger className="lg:w-auto h-9 rounded-md px-3">
            <SelectValue placeholder="Chart type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="area">
              <div className="flex items-center">
                <AreaChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Area chart</p>
              </div>
            </SelectItem>
            <SelectItem value="line">
              <div className="flex items-center">
                <LineChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Line chart</p>
              </div>
            </SelectItem>
            <SelectItem value="bar">
              <div className="flex items-center">
                <BarChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Bar chart</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
            <FileSearch className="size-6 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">
              No data for this period
            </p>
          </div>
        ) : (
          // <AreaVariant data={data} />
          // <BarVariant data={data} />
          <LineVariant data={data} />
        )}
      </CardContent>
    </Card>
  );
}
