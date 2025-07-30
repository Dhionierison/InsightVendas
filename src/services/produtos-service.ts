// services/ProdutosService.ts
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

class ProdutosService {
  async listarProdutos() {
    const response = await axiosInstance.get("/produtos");
    return response.data;
  }
}

export const produtosService = new ProdutosService();
