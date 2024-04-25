import { useLoaderData } from '@remix-run/react';
import { gql } from 'graphql-request';
import { BlogPost, RouteHeader } from '~/components';
import { postsQuery } from '~/global';
import { Posts } from '~/global/interfaces';
import { api } from '~/utils/api.server';

export async function loader() {
  const query = gql`
    ${postsQuery}
  `;

  const posts = await api.request(query);

  return posts;
}

export function Blog() {
  const {posts} = useLoaderData() as Posts;

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <RouteHeader title={'Blog'} />
        <ul>
          {posts.map(post => (
            <BlogPost post={post} key={post.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blog;
