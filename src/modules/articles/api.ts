import { TArticles } from "./type";

export const fetchArticles = async (): Promise<TArticles[]> => {
    const response = await fetch('https://pandooin.com/api/zamrood/article');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};