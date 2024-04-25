import {useLoaderData} from '@remix-run/react';
import {gql} from 'graphql-request';
import {BlogPost, RouteHeader} from '~/components';
import {Posts} from '~/global/interfaces';
import {api} from '~/utils/api.server';

export async function loader() {
  const query = gql`
    query Posts {
      posts {
        createdAt
        id
        overview
        slug
        title
        updatedAt
      }
    }
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
