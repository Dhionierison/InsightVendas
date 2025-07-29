import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
//   withCredentials: true
});

export class ClienteService {

    listarClientes() {
        return axiosInstance.get('/clientes');
    }
}    