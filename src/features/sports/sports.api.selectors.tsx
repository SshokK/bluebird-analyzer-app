import type {FetchSportsResponse} from "./sports.api.types";
import type {LeftPanelOption} from "../../components";

import { IconBasketball, IconQuestion, IconSoccer } from "../../components";
import {ROUTES} from "../../constants/global.constants";

export const getSportsForLeftNav = (response: FetchSportsResponse): LeftPanelOption[] => {
  return response.map(sport => ({
    value: sport.id,
    label: sport.name,
    link: `${ROUTES.SPORT_EVENTS}/${sport.id}`,
    icon: {
      'Soccer': <IconSoccer />,
      'Basketball': <IconBasketball />
    }[sport.name] ?? <IconQuestion />
  }))
}