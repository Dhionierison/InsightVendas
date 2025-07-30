'use client';

import { Package } from "lucide-react";
import { useEffect, useState } from "react";
import { produtosService } from "@/services/produtos-service"; // ajuste o caminho conforme sua estrutura

type Produto = {
  id: number;
  nome: string;
  descricao?: string;
  preco: number;
  estoque?: number;
};

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const data = await produtosService.listarProdutos();
        const produtosFormatados: Produto[] = data.map((item: any) => ({
          id: item.id,
          nome: item.nome,
          descricao: item.descricao,
          preco: parseFloat(item.preco),
          
        }));
        setProdutos(produtosFormatados);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarProdutos();
  }, []);

  return (
    <main className="sm:ml-14 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Package className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-semibold text-gray-800">Produtos</h1>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-700 text-left">
            <tr>
              <th className="px-6 py-3 font-semibold">ID</th>
              <th className="px-6 py-3 font-semibold">Nome</th>
              <th className="px-6 py-3 font-semibold">Preço</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {produtos.map((produto) => (
              <tr key={produto.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{produto.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {produto.nome}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </td>
                
              </tr>
            ))}
            {produtos.length === 0 && !loading && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  Nenhum produto encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
