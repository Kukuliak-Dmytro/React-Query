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
        path:"/React-Query/posts/:id",
        element:<PostPage/>
      },
      {
        path:'/React-Query/albums',
        element:<Albums/>
      },
      {
        path:'/React-Query/albums/:id',
        element:<AlbumPage/>
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