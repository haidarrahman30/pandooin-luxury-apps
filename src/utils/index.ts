export const convertToText = (html: string): string => {
    // Membuat elemen DOM sementara untuk parsing HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || '';
};