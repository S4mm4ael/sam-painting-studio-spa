import React from "react";
import {PostsItem} from "~/global/interfaces";

interface Props {
  post: PostsItem;
}

export function BlogPost({post}: Props) {
  return (
    <li className="py-4">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl: items-baseline xl:space-y-0">
        <div>
          <p className="text-base font-medium leading-6 text-teal-500">{post.createdAt}</p>
        </div>
      </article>
    </li>
  );
}
