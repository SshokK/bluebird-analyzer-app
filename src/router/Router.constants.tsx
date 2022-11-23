import type {RouteObject} from "react-router";

import React, { lazy } from "react";
import {ROUTES, URL_PARAMS} from "../constants/global.constants";
import {Navigate} from "react-router";
import {LazyComponent} from "../components";

const Admin = lazy(() => import("../views/AdminSports"))
const AppContent = lazy(() => import('../views/AppContent'));
const Dashboard = lazy(() => import("../views/Dashboard"))
const SportFamilyEvents = lazy(() => import("../views/SportFamilyEvents"))

export const ROUTES_CONFIG:  RouteObject[] = [
  {
    path: '/*',
    element: (
      <LazyComponent>
        <AppContent />
      </LazyComponent>
    ),
    children: [
      {
        path: ROUTES.ADMIN,
        element: (
          <LazyComponent>
            <Admin />
          </LazyComponent>
        )
      },
      {
        path: ROUTES.DASHBOARD,
        element: (
          <LazyComponent>
            <Dashboard />
          </LazyComponent>
        )
      },
      {
        path: `${ROUTES.SPORT_FAMILY_EVENTS}/:${URL_PARAMS.SPORT_FAMILY_ID}`,
        element: (
          <LazyComponent>
            <SportFamilyEvents />
          </LazyComponent>
        )
      },
      {
        path: '*',
        element: <Navigate replace to={ROUTES.DASHBOARD} />
      }
    ]
  }
]