export type TArticle = {
    id: string;
    slug: string;
    title: string;
    summary: string;
    featured_image: string;
    featured_image_caption: string;
    read_time: string;
};

export type TArticles = {
    success: boolean;
    message: string;
    code: number;
    data: TArticle[];
};
