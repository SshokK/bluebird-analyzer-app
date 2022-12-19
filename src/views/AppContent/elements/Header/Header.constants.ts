import type {NavLink} from "components";

import {ROUTES} from "constants/global.constants";

export const NAV_LINKS: NavLink[] = [
  {
    path: ROUTES.DASHBOARD,
    title: 'Dashboard'
  },
  {
    path: ROUTES.PROXIES,
    title: 'Proxies'
  },
  {
    path: ROUTES.SPORTS_CONFIGURATION,
    title: 'Sports Configuration'
  },
  {
    path: ROUTES.BOOKMAKER_CRAWLERS,
    title: 'Crawlers'
  }
]