import {Link} from "@remix-run/react";
import {PostsItem} from "~/global/interfaces";
import {DateString} from "../UI/DateString";

interface Props {
  post: PostsItem;
}

export function BlogPost({post}: Props) {
  return (
    <li className="py-4">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl: items-baseline xl:space-y-0">
        <DateString date={post.createdAt} />
        <Link to={`/post/${post.slug}`} className="space-y-3 xl:col-span-3" prefetch="intent">
          <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            {post.title}
          </h3>
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{post.overview}</div>
        </Link>
      </article>
    </li>
  );
}
