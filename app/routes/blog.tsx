import {useLoaderData} from '@remix-run/react';
import {gql} from 'graphql-request';
import {BlogPost} from '~/components';
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
        <div className="space-2 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
            All Blog Posts
          </h1>
        </div>
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
