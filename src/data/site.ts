export const SITE_URL = 'https://www.ricardomorais.dev';

export const AUTHOR = {
  name: 'Ricardo Morais',
  jobTitle: 'Software Engineer',
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/images/me.jpeg`,
  sameAs: [
    'https://github.com/RicardoMoraisPOR',
    'https://www.linkedin.com/in/ricardo-dias-morais/',
  ],
};

export const DEFAULT_PREVIEW_IMAGE_URL = `${SITE_URL}/website-preview.png`;

export const getBlogPostPreviewImageUrl = (slug: string) =>
  `${SITE_URL}/images/blog/${slug}/blog-preview.png`;
