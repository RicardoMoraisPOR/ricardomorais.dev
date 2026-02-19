import {
  HASHNODE_BLOG_POSTS_QUERY,
  HASHNODE_BLOG_POST_QUERY_BY_SLUG,
} from './graphql/queries.graphql';

export type BlogPost = {
  id: string;
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  slug: string;
  tags: Array<{
    name: string;
    id: string;
  }>;
  content: {
    markdown: string;
  };
};

export type BlogPostDetails = Omit<BlogPost, 'brief'> & {
  coverImage: {
    url: string;
  };
  seo: Array<{
    title: string;
    description: string;
  }>;
};

export type Edges<T> = Array<{ node: T; cursor: string }>;

export type GraphqlListProps<T> = {
  edges: Edges<T>;
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
};

export const fetchBlogPosts =
  (after?: string) => async (): Promise<GraphqlListProps<BlogPost>> => {
    const res = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: HASHNODE_BLOG_POSTS_QUERY,
        variables: {
          after,
        },
      }),
    });

    if (!res.ok) throw new Error('Network error');

    const json = await res.json();
    return json.data.publication.posts;
  };

export const fetchBlogPost =
  (slug: string) => async (): Promise<BlogPostDetails> => {
    const res = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: HASHNODE_BLOG_POST_QUERY_BY_SLUG,
        variables: {
          slug,
        },
      }),
    });

    if (!res.ok) throw new Error('Network error');

    const json = await res.json();
    return json.data.publication.post;
  };
