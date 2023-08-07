import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {AlbumPage, ArtistaPage, SearchArtistPage} from "./pages";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {ErrorPage} from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchArtistPage />
  },
  {
    path: "/search-artist",
    element: <SearchArtistPage />
  },
  {
    path: "/artist/:id",
    element: <ArtistaPage />
  },
  {
    path: "/album/:id",
    element: <AlbumPage />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
