import { findPostMetadataBySlug } from '../src/data/posts/registry.js';
import {
  AUTHOR,
  SITE_URL,
  getBlogPostPreviewImageUrl,
} from '../src/data/site.js';
import { injectPostMeta } from '../src/lib/blogMeta.js';

export async function GET(request: Request) {
  const origin = `${request.headers.get('x-forwarded-proto') ?? 'https'}://${
    request.headers.get('x-forwarded-host') ?? request.headers.get('host')
  }`;
  const requestUrl = new URL(request.url, origin);
  const slug = requestUrl.searchParams.get('slug') ?? '';

  const shellResponse = await fetch(new URL('/', requestUrl));
  const html = await shellResponse.text();

  const post = findPostMetadataBySlug(slug);

  if (!post) {
    return new Response(html, {
      status: shellResponse.status,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    });
  }

  const imageUrl = getBlogPostPreviewImageUrl(post.slug);

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
