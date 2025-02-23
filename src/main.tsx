import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Posts } from './pages/Posts.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/vite-react-router-template/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router-template/",
        element: <Home />,
      },
      {
        path: "/vite-react-router-template/contact",
        element: <Contact />,
      },
      {
        path: "/vite-react-router-template/posts",
        element: <Posts />
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);