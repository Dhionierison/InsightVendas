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
} from "recharts";
import { DollarSign, ClipboardList } from "lucide-react";
import { ChartContainer, ChartConfig } from "../ui/chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

export default function ChartOverview() {
  const vendasData = [
    { name: "Jan", total: 1000 },
    { name: "Fev", total: 2000 },
    { name: "Mar", total: 1200 },
    { name: "Abr", total: 1500 },
    { name: "Mai", total: 3000 },
    { name: "Jun", total: 2500 },
  ];

  const pedidosPorDiaData = Array.from({ length: 31 }, (_, i) => ({
    name: String(i + 1).padStart(2, "0"),
    total: Math.floor(Math.random() * 20) + 5,
  }));

  const chartConfigVendas: ChartConfig = {
    total: {
      label: "Receita",
      icon: DollarSign,
      color: "hsl(142.1, 76.2%, 36.3%)",
    },
  };

  const chartConfigPedidos: ChartConfig = {
    total: {
      label: "Pedidos",
      icon: ClipboardList,
      color: "hsl(240, 100%, 50%)",
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      {/* Card de Vendas */}
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-gray-800">
              Overview Vendas
            </CardTitle>
            <DollarSign className="w-4 h-4" />
          </div>
          <CardDescription>Evolução das Vendas</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ChartContainer config={chartConfigVendas}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vendasData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke={chartConfigVendas.total.color}
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Card de Pedidos */}
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-gray-800">
              Pedidos no Mês
            </CardTitle>
            <ClipboardList className="w-4 h-4" />
          </div>
          <CardDescription>Pedidos por Dia (Julho)</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ChartContainer config={chartConfigPedidos}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pedidosPorDiaData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke={chartConfigPedidos.total.color}
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
