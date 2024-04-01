import {Link} from "@remix-run/react";
import {PostsItem, ProjectItem} from "~/global/interfaces";
import {DateString} from "../UI/DateString";

interface Props {
  project: ProjectItem;
}

export function Project({project}: Props) {
  return <h3>{project.title}</h3>;
}
