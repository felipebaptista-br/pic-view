// Importação de todas as bibliotecas
import axios from 'axios'

// Criação da instância do axios para a API do Unsplash com as credenciais de acesso.
const api = axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
    }
});

// Exportação da instância para usar na criação de endpoints.
export default api;