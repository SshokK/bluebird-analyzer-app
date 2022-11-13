import type {RouteObject} from "react-router";

import React, { lazy } from "react";
import {ROUTES, URL_PARAMS} from "../constants/global.constants";
import {Navigate} from "react-router";
import {LazyComponent} from "../components";

const AppContent = lazy(() => import('../views/AppContent'));
const Dashboard = lazy(() => import("../views/Dashboard"))
const SportEvents = lazy(() => import("../views/SportEvents"))

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
        path: ROUTES.DASHBOARD,
        element: (
          <LazyComponent>
            <Dashboard />
          </LazyComponent>
        )
      },
      {
        path: `${ROUTES.SPORT_EVENTS}/:${URL_PARAMS.SPORT_ID}`,
        element: (
          <LazyComponent>
            <SportEvents />
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