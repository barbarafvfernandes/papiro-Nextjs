export interface Post {
    id: string;
    slug: string;
    title: string;
    summary: string;
    content: { html: string };
    thumbnail?: { url: string };
    date: string;
    author?: {
        name: string;
    };
}