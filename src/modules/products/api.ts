import { TProducts } from "./type";

export const fetchDestinations = async (): Promise<TProducts[]> => {
    const response = await fetch('https://pandooin.com/api/zamrood/itinerary?highlight=true');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};