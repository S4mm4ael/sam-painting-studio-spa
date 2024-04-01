import {LoaderFunctionArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {gql} from "graphql-request";
import {ProjectsItem} from "~/components/ProjectsItem";
import {Projects} from "~/global/interfaces";
import {api} from "~/utils/api.server";

export async function loader({}: LoaderFunctionArgs) {
  const query = gql`
    query Projects {
      projects {
        id
        slug
        overview
        title
        titleImage {
          url
        }
        publishedAt
      }
    }
  `;

  const projects = await api.request(query);

  return projects;
}

function Gallery() {
  const {projects} = useLoaderData() as Projects;

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y2 pt-6 pb-8 md:spece-y-5">
        <h1
          className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 
        sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Gallery
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {projects.map(project => (
          <ProjectsItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
