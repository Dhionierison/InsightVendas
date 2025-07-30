import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});

export class VendasService {
  async listarTodosItens() {
    try {
      const response = await axiosInstance.get('/vendas/itens_todos');
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar itens de venda:", error);
      throw error;
    }
  }
}
