'use client';

import { SettingsIcon } from "lucide-react";
import { useState } from "react";

type AcaoConfiguracao = {
  id: number;
  titulo: string;
  descricao: string;
  onClick: () => void;
};

export default function Configuracoes() {
  const [mensagem, setMensagem] = useState<string | null>(null);

  const configuracoes: AcaoConfiguracao[] = [
    {
      id: 1,
      titulo: "Alterar Tema",
      descricao: "Alternar entre modo claro e escuro",
      onClick: () => setMensagem("Tema alterado com sucesso!"),
    },
    {
      id: 2,
      titulo: "Limpar Cache",
      descricao: "Remove dados temporários armazenados",
      onClick: () => setMensagem("Cache limpo com sucesso!"),
    },
    {
      id: 3,
      titulo: "Notificações",
      descricao: "Ativar ou desativar notificações do sistema",
      onClick: () => setMensagem("Notificações atualizadas!"),
    },
  ];

  return (
    <main className="sm:ml-14 p-6">
      <div className="flex items-center gap-2 mb-6">
        <SettingsIcon className="w-6 h-6 text-orange-400" />
        <h1 className="text-2xl font-semibold text-orange-400">Configurações</h1>
      </div>

      {mensagem && (
        <div className="mb-4 rounded-lg bg-green-100 text-green-800 px-4 py-2">
          {mensagem}
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-700 text-left">
            <tr>
              <th className="px-6 py-3 font-semibold">Título</th>
              <th className="px-6 py-3 font-semibold">Descrição</th>
              <th className="px-6 py-3 font-semibold text-center">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {configuracoes.map((config) => (
              <tr key={config.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {config.titulo}
                </td>
                <td className="px-6 py-4 text-gray-600">{config.descricao}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={config.onClick}
                    className="bg-primary text-white px-4 py-1.5 rounded hover:bg-primary/90 transition"
                  >
                    Executar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
