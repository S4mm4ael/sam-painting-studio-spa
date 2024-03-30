import {RichText} from "@graphcms/rich-text-react-renderer";
import {LoaderFunctionArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {gql} from "graphql-request";
import React from "react";
import {DateString} from "~/components/UI";
import {PostId} from "~/global/interfaces";
import {api} from "~/utils/api.server";

export async function loader({params}: LoaderFunctionArgs) {
  const query = gql`
  query Posts {
    post(where: {slug: "${params.slug}"}) {
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

  const post = await api.request(query);

  return post;
}

function PostSlug() {
  const {post} = useLoaderData() as PostId;
  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 lg:px-48">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <DateString date={post.publishedAt} />
          </div>
        </div>
        <div>
          <h1
            className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900
             dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {post.title}
          </h1>
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
                a: ({children, openInNewTab, href, rel, ...rest}) => {
                  return (
                    <a
                      href={href}
                      target={openInNewTab ? "_blank" : "_self"}
                      {...rest}
                      className="text-teal-500 hover:text-teal-600">
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
