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
