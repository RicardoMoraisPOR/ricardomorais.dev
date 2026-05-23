import { type BlogPost, loadAllBlogPosts } from '@/data/blog-posts';

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  return loadAllBlogPosts();
};

export const fetchBlogPost = async (slug: string): Promise<BlogPost> => {
  const posts = await loadAllBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    throw new Error(`Blog post with slug "${slug}" not found`);
  }

  return post;
};

// api/chesscom.ts

export interface ChessCOMPlayerStats {
  tactics: {
    highest: {
      rating: number;
      date: number;
    };
  };
}

export const fetchChessDotComPlayerHighestStat = async (): Promise<number> => {
  const res = await fetch(
    `https://api.chess.com/pub/player/ricardodiasmorais/stats`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch Chess.com player stats');
  }

  const data: ChessCOMPlayerStats = await res.json();

  return data.tactics.highest.rating;
};
