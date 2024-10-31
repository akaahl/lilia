import { PieChart, Radar, FileSearch, Target } from "lucide-react";
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
import PieVariant from "./PieVariant";

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

export default function SpendingPie({ data = [] }: Props) {
  const [chartType, setChartType] = useState<string>("pie");

  const handleChartTypeChange = (type: string) => {
    setChartType(type);
  };

  return (
    <Card className="drop-shadow-sm border-none">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
        <CardTitle className="text-xl line-clamp-1">Categories</CardTitle>
        <Select
          defaultValue={chartType}
          onValueChange={handleChartTypeChange}
        >
          <SelectTrigger className="lg:w-auto h-9 rounded-md px-3">
            <SelectValue placeholder="Chart type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pie">
              <div className="flex items-center mr-3">
                <PieChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Pie chart</p>
              </div>
            </SelectItem>
            <SelectItem value="radar">
              <div className="flex items-center mr-3">
                <Radar className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Radar chart</p>
              </div>
            </SelectItem>
            <SelectItem value="radial">
              <div className="flex items-center mr-3">
                <Target className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Radial chart</p>
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
          <>
            {chartType === "pie" && <PieVariant data={data} />}
            {/* {chartType === "radar" && <RadarVariant data={data} />}
            {chartType === "radial" && <RadialVariant data={data} />} */}
          </>
        )}
      </CardContent>
    </Card>
  );
}
