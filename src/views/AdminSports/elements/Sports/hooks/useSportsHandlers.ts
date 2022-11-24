import type {SportsHandlers} from "../../SportFamilies/hooks/useSportsHandlers.types";

import {QUERY_PARAMS} from "../../../SportsConfiguration.constants";

import * as utils from "utils";

import {useLocation, useNavigate} from "react-router";

export const useSportsHandlers = (): SportsHandlers => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleSportClick: SportsHandlers['handleSportClick'] = (sportId) => () => {
    navigate(utils.formatRedirectUrl({
      path: '',
      shouldKeepExistingParams: true,
      location,
      params: {
        [QUERY_PARAMS.SPORT_ID]: sportId
      }
    }), {
      relative: "route",
      replace: true
    })
  };
  
  return {
    handleSportClick
  }
}