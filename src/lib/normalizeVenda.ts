export type Produto = {
  id: number;
  nome: string;
  preco: string;
};

export type ItemVenda = {
  id: number;
  venda_id: number;
  produto_id: number;
  quantidade: number;
  preco_unitario: string;
  valor_total_item: string;
  produto: Produto;
};

export type VendaResponse = {
  venda_id: number;
  itens: ItemVenda[];
};

export type VendaNormalizada = {
  id: number;
  produtos: string[];
  quantidade_total: number;
  valor_total: number;
};

export function normalizeVenda(venda: VendaResponse): VendaNormalizada {
  const produtos = venda.itens?.map(item => item.produto.nome) ?? [];
  const quantidade_total = venda.itens?.reduce((sum, item) => sum + item.quantidade, 0) ?? 0;
  const valor_total = venda.itens?.reduce(
    (sum, item) => sum + parseFloat(item.valor_total_item ?? "0"),
    0
  ) ?? 0;

  return {
    id: venda.venda_id,
    produtos,
    quantidade_total,
    valor_total
  };
}
