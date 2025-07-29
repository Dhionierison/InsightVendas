import Image from "next/image";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import {
  BadgeDollarSignIcon,
  DollarSignIcon,
  PackageCheckIcon,
  PackageOpen,
  Users,
} from "lucide-react";
import ChartOverview from "../components/chart";
import { Sales } from "../components/sales";
import Head from "next/head";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Insight Vendas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sm:ml-14 p-4">
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-rose-50 border border-rose-400 shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg sm:text-xl font-semibold text-rose-900 select-none">
                  Total de Vendas
                </CardTitle>
                <DollarSignIcon className="w-5 h-5 text-rose-600" />
              </div>
              <CardDescription className="text-sm text-rose-700 mt-1">
                Total de Vendas em 90 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl sm:text-2xl font-bold text-rose-800">
                R$ 40.000,00
              </p>
            </CardContent>
          </Card>

          <Card className="bg-emerald-50 border border-emerald-400 shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg sm:text-xl font-semibold text-emerald-900 select-none">
                  Novos Clientes
                </CardTitle>
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <CardDescription className="text-sm text-emerald-700 mt-1">
                Novos clientes em 30 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl sm:text-2xl font-bold text-emerald-800">
                234
              </p>
            </CardContent>
          </Card>

          <Card className="bg-cyan-50 border border-cyan-400 shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg sm:text-xl font-semibold text-cyan-900 select-none">
                  Pedidos Hoje
                </CardTitle>
                <PackageCheckIcon className="w-5 h-5 text-cyan-600" />
              </div>
              <CardDescription className="text-sm text-cyan-700 mt-1">
                Total de Pedidos Hoje
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl sm:text-2xl font-bold text-cyan-800">31</p>
            </CardContent>
          </Card>

          <Card className="bg-indigo-50 border border-indigo-400 shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg sm:text-xl font-semibold text-indigo-900 select-none">
                  Total Pedidos
                </CardTitle>
                <PackageOpen className="w-5 h-5 text-indigo-600" />
              </div>
              <CardDescription className="text-sm text-indigo-700 mt-1">
                Total de Pedidos em 30 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl sm:text-2xl font-bold text-indigo-800">
                123
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview />
        </section>
        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <Sales />
        </section>
      </main>
    </>
  );
}
