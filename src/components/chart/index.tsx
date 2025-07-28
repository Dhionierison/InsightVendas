"use client";

import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  TooltipProps,
} from "recharts";
import { DollarSign } from "lucide-react";
import { ChartContainer, ChartConfig } from "../ui/chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";

export default function ChartOverview() {
  const chartData = [
    { name: "Jan", total: 1000 },
    { name: "Fev", total: 2000 },
    { name: "Mar", total: 1200 },
    { name: "Abr", total: 1500 },
    { name: "Mai", total: 3000 },
    { name: "Jun", total: 2500 },
  ];

  const chartConfig: ChartConfig = {
    total: {
      label: "Receita",
      icon: DollarSign,
      color: "hsl(142.1, 76.2%, 36.3%)",
    },
  };

  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Overview Vendas
          </CardTitle>
          <DollarSign className="ml-auto w-4 h4" />
        </div>
        <CardDescription>Evolução das Vendas</CardDescription>
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="total"
              stroke="hsl(142.1, 76.2%, 36.3%)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardHeader>
    </Card>
  );
}
