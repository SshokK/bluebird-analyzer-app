import type {FetchSportFamiliesResponse} from "./sportFamilies.api.types";
import type {LeftPanelOption, TableProps} from "../../components";

import { IconBasketball, IconQuestion, IconSoccer } from "../../components";
import {ROUTES} from "../../constants/global.constants";

export const getSportFamiliesForLeftNav = (response: FetchSportFamiliesResponse): LeftPanelOption[] => {
  return response.map(sportFamily => ({
    value: sportFamily.id,
    label: sportFamily.name,
    link: `${ROUTES.SPORT_FAMILY_EVENTS}/${sportFamily.id}`,
    icon: {
      'Soccer': <IconSoccer />,
      'Basketball': <IconBasketball />
    }[sportFamily.name] ?? <IconQuestion />
  }))
}
