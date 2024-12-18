"use client";

import DataGrid from "./DataGrid";
import DataCharts from "@/components/ui/data-charts";

export default function DashboardPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-40 -mt-24">
      <DataGrid />
      <DataCharts />
    </div>
  );
}
