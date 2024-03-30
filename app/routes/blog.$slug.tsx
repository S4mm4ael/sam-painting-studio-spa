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
      id,
      overview,
      publishedAt,
      slug,
      title,
      body {
        json
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
      </header>
    </div>
  );
}

export default PostSlug;
