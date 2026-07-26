import { Post } from '@/types/types';
import hygraphClient from './axios';

type Data = {
  posts: Post[];
};

export const getPosts = {
  aboutPost: async () => {
    const query = `
      query MyQuery {
        posts {
          title
          id
          slug
          summary
          content{html}
          thumbnail {url}
          date
          author {
      name
          }
       }
    }
    `;

    try {
      const response = await hygraphClient.post<{ data: Data }>('', { query });

      return response.data.data.posts;
    } catch (error) {
      console.error('Erro ao buscar posts do Hygraph:', error);
      throw error;
    }
  }
};

export const getPostDetails = async (slug: string): Promise<Post | undefined> => {
  const query = `
    query GetPostBySlug($slug: String!) {
      posts(where: { slug: $slug }) {
        id
        title
        slug
        summary
        content {html}
        thumbnail {url}
        date
        author {
      name
        }
      }
    }
  `;

  try {
    const response = await hygraphClient.post<{ data: { posts: Post[] } }>('', {
      query,
      variables: { slug },
    });

    return response.data?.data?.posts?.[0] ?? undefined;
  } catch (error) {
    console.error('Erro ao buscar detalhes do post no Hygraph:', error);
    return undefined;
  }
};





