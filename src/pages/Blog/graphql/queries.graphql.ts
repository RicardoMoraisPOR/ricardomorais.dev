export const HASHNODE_BLOG_POSTS_QUERY = `
query GetPosts($after: String) {
  publication(host: "ricardomorais.hashnode.dev") {
    id
    posts(first: 4, after: $after) {
      edges {
        node {
          id
          title
          brief
          url
          publishedAt
          readTimeInMinutes
          slug
          url
          tags {
            name
            id
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
`;

export const HASHNODE_BLOG_POST_QUERY_BY_SLUG = `
query GetPostBySlug($slug: String!) {
  publication(host: "ricardomorais.hashnode.dev") {
    id
    post(slug: $slug) {
      id
      title
      brief
      url
      publishedAt
      readTimeInMinutes
      slug
      tags {
        name
        id
      }
      content {
        markdown
      }
    }
  }
}
`;
