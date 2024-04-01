import {Link} from "@remix-run/react";
import {PostsItem, ProjectItem} from "~/global/interfaces";
import {DateString} from "../UI/DateString";

interface Props {
  project: ProjectItem;
}

export function ProjectsItem({project}: Props) {
  return (
    <article
      className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm
     dark:border-gray-800 dark:bg-gray-800 dark:shadow-gray-700/25">
      <img
        src={project.titleImage.url}
        alt={project.title + "image"}
        className="h-56 w-fill object-cover"
      />
      <div className="p-4 sm:p-6 ">
        <Link
          to={project.slug}
          className="flex gap-2 transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-105">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{project.title}</h3>
        </Link>
        <p
          className="mt-2 line-clamp-3 text-sm leading-relaxed 
        text-gray-500 dark:text-gray-400">
          {project.overview}
        </p>
      </div>
    </article>
  );
}
