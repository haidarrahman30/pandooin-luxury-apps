export type TGallery = {
    itinerary_id: string;
    gallery_id: number;
    gallery_alt_text: string;
    gallery_path: string;
    src: string;
    title: string;
};

export type TProduct = {
    itinerary_id: string;
    itinerary_name: string;
    itinerary_day: number;
    itinerary_slug: string;
    partner_name: string;
    partner_alias: string;
    itinerary_location: string;
    itinerary_short_description: string;
    itinerary_long_description: string;
    morph_class: string;
    related_galleries: TGallery[];
};

export type TProducts = {
    success: boolean;
    message: string;
    code: number;
    data: TProduct[];
};
