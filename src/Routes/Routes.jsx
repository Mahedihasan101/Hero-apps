import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Appss from '../Pages/Appss/Appss';
import AppDetails from '../Componants/AppDetails/AppDetails';
import Installation from '../Componants/Installation/Installation';
import Loding from '../Componants/Loding/Loding';
import Apperror from '../Componants/Apperror/Apperror';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <span><Loding></Loding></span>,
    children: [
      {
        index: true,

        loader: () => fetch('/AppData.json'),

        Component: Home,

      },
      {
        path: "/Appss",
        loader: () => fetch('/AppData.json'),
        Component: Appss,
        errorElement: <Apperror></Apperror>,
        hydrateFallbackElement: <span> <Loding></Loding></span>
      },
      {
        path: "/Appss/:id",
        loader: () => fetch('/AppData.json'),
        Component: AppDetails,
        errorElement: <Apperror></Apperror>,
        hydrateFallbackElement: <span> <Loding></Loding></span>
      },
      {
        path: "/Install",
        Component: Installation,
        errorElement: <Apperror></Apperror>,
        hydrateFallbackElement: <span> <Loding></Loding></span>
      }
    ]
  },
]);