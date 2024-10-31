import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = ["#0062ff", "#12c6ff", "#ff647f", "#ff9354"];

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

export default function PieVariant({ data }: Props) {
  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >
      <PieChart>
        <Legend />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={90}
          innerRadius={60}
          paddingAngle={2}
          dataKey={"value"}
          fill="#8884d8"
          labelLine={false}
        >
          {data?.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
