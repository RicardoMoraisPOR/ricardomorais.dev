import type { BlogPost } from '@/data/blog-posts';
import { AUTHOR, DEFAULT_PREVIEW_IMAGE_URL, SITE_URL } from '@/data/site';

const PERSON_ID = `${SITE_URL}/about#person`;

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  url: AUTHOR.url,
  image: AUTHOR.image,
  sameAs: AUTHOR.sameAs,
};

export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [personSchema],
};

const countWords = (content: string) =>
  content.trim().split(/\s+/).filter(Boolean).length;

export const buildBlogPostingGraph = (post: BlogPost) => {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${postUrl}#article`,
        headline: post.title,
        description: post.brief,
        datePublished: post.publishedAt,
        author: { '@id': PERSON_ID },
        publisher: { '@id': PERSON_ID },
        image: DEFAULT_PREVIEW_IMAGE_URL,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postUrl,
        },
        wordCount: countWords(post.content),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${postUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  };
};

export const toJsonLd = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c');
