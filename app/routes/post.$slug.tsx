import {RichText} from '@graphcms/rich-text-react-renderer';
import {LoaderFunctionArgs} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {gql} from 'graphql-request';
import {DateString, PostHeader} from '~/components/UI';
import {postQuery} from '~/global';
import {PostId} from '~/global/interfaces';
import {api} from '~/utils/api.server';

export async function loader({params}: LoaderFunctionArgs) {
  if (!params.slug) return;

  const query = gql`
    ${postQuery(params.slug)}
  `;

  const post = await api.request(query);

  return post;
}

function PostSlug() {
  const {post} = useLoaderData() as PostId;
  document.title = post.title;
  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 lg:px-48">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <DateString date={post.publishedAt} />
          </div>
        </div>
        <div>
          <PostHeader title={post.title} />
        </div>
      </header>
      <div className="divide-y divide-gray-2000 pb-8 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span02 xl:pb-9">
          <div className="prose max-w-none pt-10 pb-8 dark:prose-invert">
            <RichText
              content={post.body.raw}
              renderers={{
                img: ({src, altText, height, width}) => {
                  return <img src={src} alt={altText} height={height} width={width} />;
                },
                a: ({children, openInNewTab, href, ...rest}) => {
                  return (
                    <a
                      href={href}
                      target={openInNewTab ? '_blank' : '_self'}
                      rel="noreferrer"
                      {...rest}
                      className="text-teal-500 hover:text-teal-600"
                    >
                      {children}
                    </a>
                  );
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSlug;
