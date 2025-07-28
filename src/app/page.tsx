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
          <Card>
            <CardHeader>
              <div className="flex items items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total de Vendas
                </CardTitle>
                <DollarSignIcon className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>Total de Vendas em 90 dias</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 40.000,00</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Novos Clientes
                </CardTitle>
                <Users className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>Novos clientes em 30 dias</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">234</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Pedidos Hoje
                </CardTitle>
                <PackageCheckIcon className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>Total de Pedidos Hoje</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">31</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total Pedidos
                </CardTitle>
                <PackageOpen className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>Total de Pedidos em 30 dias</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">123</p>
            </CardContent>
          </Card>
        </section>
        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview />
          <Sales></Sales>
        </section>
      </main>
    </>
  );
}
