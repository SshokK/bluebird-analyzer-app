import type {SportFamiliesHandlers} from "./useSportFamiliesHandlers.types";
import type {SportFamiliesData} from "./useSportFamiliesData.types";

import * as utils from "utils";

import {QUERY_PARAMS} from "../../../SportsConfiguration.constants";

import {useNavigate} from "react-router";

export const useSportFamiliesHandlers = ({
  localActions
}: {
  localActions: SportFamiliesData['localActions']
}): SportFamiliesHandlers => {
  const navigate = useNavigate();

  const handleAddModalToggle: SportFamiliesHandlers['handleAddModalToggle'] = (isOpen) => () => {
    localActions.setIsAddModalOpen(isOpen)
  }

  const handleSportFamilyClick: SportFamiliesHandlers['handleSportFamilyClick'] = (sportFamilyId) => () => {
    navigate(utils.formatRedirectUrl({
      path: '',
      params: {
        [QUERY_PARAMS.SPORT_FAMILY_ID]: sportFamilyId
      }
    }), {
      relative: "route",
      replace: true
    })
  }

  return {
    handleAddModalToggle,
    handleSportFamilyClick
  }
}