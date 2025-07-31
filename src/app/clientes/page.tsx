"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { ClienteService } from "@/services/clientes-service";

const clienteService = new ClienteService();

type Cliente = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
};

export default function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await clienteService.listarClientes();
        const lista = response.data?.data || response.data;
        if (Array.isArray(lista)) {
          setClientes(lista);
        } else {
          console.error("A resposta da API não é um array:", lista);
        }
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <main className="sm:ml-14 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-6 h-6 text-orange-400" />
        <h1 className="text-2xl font-semibold text-orange-400">Clientes</h1>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-700 text-left">
            <tr>
              <th className="px-6 py-3 font-semibold">ID</th>
              <th className="px-6 py-3 font-semibold">Nome</th>
              <th className="px-6 py-3 font-semibold">Email</th>
              <th className="px-6 py-3 font-semibold">Telefone</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clientes.map((cliente) => (
              <tr key={cliente.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{cliente.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {cliente.nome}
                </td>
                <td className="px-6 py-4 text-gray-600">{cliente.email}</td>
                <td className="px-6 py-4 text-gray-600">{cliente.telefone}</td>
              </tr>
            ))}
            {clientes.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  Nenhum cliente encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
