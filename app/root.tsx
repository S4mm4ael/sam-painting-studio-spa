import type {LinksFunction, LoaderFunctionArgs} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {ThemeProvider} from 'remix-themes';
import stylesheet from '~/tailwind.css';
import {themeSessionResolver} from './utils/session.server';

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

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
