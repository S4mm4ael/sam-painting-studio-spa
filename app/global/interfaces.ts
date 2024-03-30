export interface NavLinkProps {
  name: string;
  path: string;
}

export interface PostsItem {
  createdAt: string;
  id: string;
  overview: string;
  title: string;
  slug: string;
}

export interface Posts {
  posts: PostsItem[];
}

export interface PostId {
  post: {
    id: string;
    overview: string;
    title: string;
    slug: string;
    publishedAt: string;
    body: any;
  };
}
