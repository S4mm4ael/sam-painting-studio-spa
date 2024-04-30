import {MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {gql} from 'graphql-request';
import {RouteHeader} from '~/components';
import {ProjectsItem} from '~/components/ProjectsItem';
import {projectsQuery} from '~/global';
import {Projects} from '~/global/interfaces';
import {api} from '~/utils/api.server';

export const meta: MetaFunction = () => {
  return [{title: 'Gallery'}];
};

export async function loader() {
  const query = gql`
    ${projectsQuery}
  `;

  const projects = await api.request(query);

  return projects;
}

function Gallery() {
  const {projects} = useLoaderData() as Projects;

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <RouteHeader title={'Gallery'} />
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {projects.map(project => (
          <ProjectsItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
