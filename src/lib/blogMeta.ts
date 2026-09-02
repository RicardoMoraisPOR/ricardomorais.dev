type PostMetaTags = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const replaceMetaContent = (
  html: string,
  attr: 'property' | 'name',
  key: string,
  value: string,
) => {
  const tagPattern = new RegExp(
    `(<meta[^>]*\\b${attr}=["']${key}["'][^>]*\\bcontent=")[^"]*("[^>]*>)`,
    'i',
  );
  return html.replace(tagPattern, `$1${escapeHtml(value)}$2`);
};

export const injectPostMeta = (html: string, post: PostMetaTags): string => {
  let result = html;

  result = result.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${escapeHtml(post.title)}</title>`,
  );

  result = replaceMetaContent(result, 'property', 'og:title', post.title);
  result = replaceMetaContent(
    result,
    'property',
    'og:description',
    post.description,
  );
  result = replaceMetaContent(result, 'property', 'og:image', post.imageUrl);
  result = replaceMetaContent(result, 'property', 'og:url', post.url);
  result = replaceMetaContent(result, 'property', 'og:type', 'article');

  result = replaceMetaContent(result, 'name', 'twitter:title', post.title);
  result = replaceMetaContent(
    result,
    'name',
    'twitter:description',
    post.description,
  );
  result = replaceMetaContent(result, 'name', 'twitter:image', post.imageUrl);

  const extraTags = [
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="article:published_time" content="${escapeHtml(post.publishedAt)}" />`,
  ].join('\n  ');

  result = result.replace('</head>', `  ${extraTags}\n</head>`);

  return result;
};
