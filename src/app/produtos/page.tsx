'use client';

import { ShoppingBagIcon, Package } from "lucide-react";
import { useEffect, useState } from "react";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
};

const mockProdutos: Produto[] = [
  {
    id: 1,
    nome: "Camiseta Branca",
    preco: 59.9,
    estoque: 120,
  },
  {
    id: 2,
    nome: "Calça Jeans",
    preco: 149.5,
    estoque: 80,
  },
  {
    id: 3,
    nome: "Tênis Esportivo",
    preco: 299.99,
    estoque: 45,
  },
];

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(mockProdutos);
    }, 500);

    return () => clearTimeout(timer);
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
              <th className="px-6 py-3 font-semibold">Estoque</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {produtos.map((produto) => (
              <tr key={produto.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{produto.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{produto.nome}</td>
                <td className="px-6 py-4 text-gray-600">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </td>
                <td className="px-6 py-4 text-gray-600">{produto.estoque}</td>
              </tr>
            ))}
            {produtos.length === 0 && (
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
