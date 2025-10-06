import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Posts } from './pages/Posts.tsx';
import { Albums } from './pages/Albums.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import PostPage from './pages/PostPage.tsx'
import AlbumPage from './pages/AlbumPage.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://700675c1d473008cbdbff810d7c1a30e@o4510141446815744.ingest.de.sentry.io/4510141457104976",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

//ideally, routes must be migrated to a separate file, but when I first wrote this,
//I was not as experienced as I am now, so I left it like this.
const router = createBrowserRouter([
  {
    path: "/React-Query/",
    element: <App />,
    children: [
      {
        path: "/React-Query/",
        element: <Home />,
      },
      {
        path: "/React-Query/contact",
        element: <Contact />,
      },
      {
        path: "/React-Query/posts",
        element: <Posts />,
      },
      {
        path: "/React-Query/posts/:id",
        element: <PostPage />
      },
      {
        path: '/React-Query/albums',
        element: <Albums />
      },
      {
        path: '/React-Query/albums/:id',
        element: <AlbumPage />
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>
);