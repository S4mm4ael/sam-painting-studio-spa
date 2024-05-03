import type {LinksFunction, LoaderFunctionArgs} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {ThemeProvider} from 'remix-themes';
import stylesheet from '~/tailwind.css';
import App from './App';
import {themeSessionResolver} from './utils';

export const links: LinksFunction = () => [{rel: 'stylesheet', href: stylesheet}];

export async function loader({request}: LoaderFunctionArgs) {
  const {getTheme} = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export default function AppWithProvider() {
  const {theme} = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}
