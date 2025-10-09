import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Appss from '../Pages/Appss/Appss';
import AppDetails from '../Componants/AppDetails/AppDetails';
import Installation from '../Componants/Installation/Installation';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <span>LOODING....</span>,
    children: [
      {
        index: true,
        loader: () => fetch('../AppData.json'),
        Component: Home,
      },
      {
        path: "/Appss",
        loader: () => fetch('../AppData.json'),
        Component: Appss,
      },
      {
        path:"/Appss/:id",
        loader: () => fetch('../AppData.json'),
        Component:AppDetails,
      },
      {
        path:"/Install",
        Component:Installation,
      }
    ]
  },
]);