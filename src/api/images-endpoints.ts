// Importação de todas as bibliotecas.
import api from '@/api';
import { Query } from '@/@types/query';
import { Error } from '@/@types/error';

// Função que faz a requisição de API e retorna 10 imagens.
const getPictures = async ({ page, perPage, query }: Query) => {
    try {
        let url = '/photos';

        // Validação da existência da query para alteração de url.
        if (query) {
            url = `search/photos?query=${query}`;
        } else if (page !== undefined && perPage !== undefined) {
            url = `/photos/?page=${page}&per_page=${perPage}`;
        }

        // Fazendo a requisição da API.
        const response = await api.get(url);
        // Retorno da requisição.
        return response.data.results || response.data;
    } catch (error: any) {
        // Retorno da requisição caso de erro, com mensagem e tipagem padrão.
        let message: Error = { error: error.error, message: error.message };
        return message;
    }
};

// Função responsável pela chamada de uma imagem única utilizando o ID.
const getPictureById = async ({ id }: { id: string }) => {
    try {
        // Fazendo a requisição da API.
        const response = await api.get(`/photos/${id}`);
        // Retorno da requisição.
        return response.data;
    } catch (error: any) {
        // Retorno da requisição caso de erro, com mensagem e tipagem padrão.
        let message: Error = { error: error.error, message: error.message };
        return message;
    }
};

// Exportação das funções de requisição.
export { getPictures, getPictureById };