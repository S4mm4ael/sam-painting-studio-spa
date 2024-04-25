import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {PreventFlashOnWrongTheme, useTheme} from 'remix-themes';
import {loader} from './root';
import {Layout} from './components/Layout';

export default function App() {
  const {theme} = useLoaderData<typeof loader>();
  const [themeX] = useTheme();

  return (
    <html lang="en" data-theme={themeX ?? ''}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body className="bg-gradient-to-r from-white dark:from-blue-900 from-0% via-slate-200 dark:via-blue-950 to-slate-400 dark:to-black text-black dark:text-white dark:bg-gray-900 h-full selection:bg-gray-50 dark:selection:bg-gray-800">
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}
