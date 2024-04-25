export const projectsQuery = `query Projects {
  projects {
    id
    slug
    overview
    title
    titleImage {
      url
    }
    publishedAt
  }
}`;

export const postsQuery = `query Posts {
  posts {
    createdAt
    id
    overview
    slug
    title
    updatedAt
  }
}`;

export const postQuery = (slug: string) => `
query Posts {
  post(where: {slug: "${slug}"}) {
    id
    overview
    publishedAt
    slug
    title
    body {
      raw
    }
  }
}
`;
