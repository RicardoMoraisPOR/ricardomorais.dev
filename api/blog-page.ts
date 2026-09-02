import { findPostMetadataBySlug } from '../src/data/posts/registry';
import { AUTHOR, SITE_URL } from '../src/data/site';
import { injectPostMeta } from '../src/lib/blogMeta';

export default async function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') ?? '';

  const shellResponse = await fetch(new URL('/', request.url));
  const html = await shellResponse.text();

  const post = findPostMetadataBySlug(slug);

  if (!post) {
    return new Response(html, {
      status: shellResponse.status,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    });
  }

  const ogImageParams = new URLSearchParams({
    title: post.title,
    readTime: String(post.readTimeInMinutes),
  });
  post.tags.forEach((tag) => ogImageParams.append('tag', tag.name));

  const imageUrl = `${SITE_URL}/api/og?${ogImageParams.toString()}`;

  const modifiedHtml = injectPostMeta(html, {
    title: `${post.title} | ${AUTHOR.name}`,
    description: post.brief,
    url: `${SITE_URL}/blog/${post.slug}`,
    imageUrl,
    publishedAt: post.publishedAt,
  });

  return new Response(modifiedHtml, {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
