import api from '@/api';

const getPictures = async ({ page, perPage, query }: {
    page?: number;
    perPage?: number;
    query?: string;
}) => {
    try {
        let url = '/photos';

        if (query) {
            url = `search/photos?query=${query}`;
        } else if (page !== undefined && perPage !== undefined) {
            url = `/photos/?page=${page}&per_page=${perPage}`;
        }

        const response = await api.get(url);
        return response.data.results || response.data;
    } catch (error) {
        return { error: true, message: error };
    }
};

const getPictureById = async ({ id }: { id: string }) => {
    try {
        const response = await api.get(`/photos/${id}`);
        return response.data;
    } catch (error) {
        return { error: true, message: error };
    }
};

export { getPictures, getPictureById };
