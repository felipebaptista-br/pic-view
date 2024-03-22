export interface Picture {
    id: string;
    description: string;
    alt_description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    user: {
        name: string;
        profile_image: {
            medium: string;
        };
    };
};