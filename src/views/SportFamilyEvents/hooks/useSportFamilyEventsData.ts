import type {SportEventsData, SportEventsURLParams } from "./useSportFamilyEventsData.types";

import {useParams} from "react-router";
import {useMemo} from "react";
import {URL_PARAMS} from "constants/global.constants";
import * as numberUtils from "utils";

export const useSportFamilyEventsData = (): SportEventsData => {
  const urlParams = useParams<SportEventsURLParams>();

  const formattedData: SportEventsData["formattedData"] = useMemo(() => {
    const sportFamilyId = numberUtils.isInteger(urlParams[URL_PARAMS.SPORT_FAMILY_ID])
      ? Number(urlParams[URL_PARAMS.SPORT_FAMILY_ID])
      : null

    return {
      sportFamilyId
    }
  }, [urlParams]);

  return {
    formattedData
  }
}