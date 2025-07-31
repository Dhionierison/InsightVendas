"use client";

import { HandshakeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { VendasService } from "@/services/vendas-service";

type VendaItem = {
  id: number;
  venda_id: number;
  produto_id: number;
  quantidade: number;
  preco_unitario: string;
};

export default function Vendas() {
  const [itens, setItens] = useState<VendaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const service = new VendasService();
        const data = await service.listarTodosItens();
        setItens(data);
      } catch (error) {
        console.error("Erro ao carregar itens de venda:", error);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  return (
    <main className="sm:ml-14 p-6">
      <div className="flex items-center gap-2 mb-6">
        <HandshakeIcon className="w-6 h-6  text-orange-400" />
        <h1 className="text-2xl font-semibold text-orange-400">Itens de Venda</h1>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-700 text-left">
            <tr>
              <th className="px-6 py-3 font-semibold">ID</th>
              <th className="px-6 py-3 font-semibold">Venda ID</th>
              <th className="px-6 py-3 font-semibold">Produto ID</th>
              <th className="px-6 py-3 font-semibold">Quantidade</th>
              <th className="px-6 py-3 font-semibold">Preço Unitário</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  Carregando...
                </td>
              </tr>
            ) : itens.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  Nenhum item encontrado.
                </td>
              </tr>
            ) : (
              itens.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.venda_id}</td>
                  <td className="px-6 py-4">{item.produto_id}</td>
                  <td className="px-6 py-4">{item.quantidade}</td>
                  <td className="px-6 py-4 text-gray-600">
                    R${" "}
                    {parseFloat(item.preco_unitario)
                      .toFixed(2)
                      .replace(".", ",")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
