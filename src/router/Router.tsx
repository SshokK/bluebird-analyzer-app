import type { FC } from 'react';
import type {RouterProps} from "./Router.types";

import { RouterProvider } from 'react-router';
import {ROUTES_CONFIG} from "./Router.constants";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter(ROUTES_CONFIG);

export const Router: FC<RouterProps> = () => {
  return (
    <RouterProvider router={router} />
  )
}