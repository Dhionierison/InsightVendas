'use client';

import { HandshakeIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Venda = {
  id: number;
  cliente_nome: string;
  data: string;
  valor_total: number;
};

const mockVendas: Venda[] = [
  {
    id: 1,
    cliente_nome: "João Silva",
    data: "2025-07-25T14:00:00Z",
    valor_total: 250.0,
  },
  {
    id: 2,
    cliente_nome: "Maria Oliveira",
    data: "2025-07-26T10:30:00Z",
    valor_total: 145.5,
  },
  {
    id: 3,
    cliente_nome: "Carlos Lima",
    data: "2025-07-28T16:45:00Z",
    valor_total: 320.75,
  },
];

export default function Vendas() {
  const [vendas, setVendas] = useState<Venda[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVendas(mockVendas);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="sm:ml-14 p-6">
      <div className="flex items-center gap-2 mb-6">
        <HandshakeIcon className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-semibold text-gray-800">Vendas</h1>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-700 text-left">
            <tr>
              <th className="px-6 py-3 font-semibold">ID</th>
              <th className="px-6 py-3 font-semibold">Cliente</th>
              <th className="px-6 py-3 font-semibold">Data</th>
              <th className="px-6 py-3 font-semibold">Valor Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {vendas.map((venda) => (
              <tr key={venda.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{venda.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{venda.cliente_nome}</td>
                <td className="px-6 py-4 text-gray-600">
                  {new Date(venda.data).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  R$ {venda.valor_total.toFixed(2).replace(".", ",")}
                </td>
              </tr>
            ))}
            {vendas.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  Nenhuma venda encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
