import type {SportEventsData, SportEventsURLParams } from "./useSportEventsData.types";

import {useParams} from "react-router";
import {useMemo} from "react";
import {URL_PARAMS} from "constants/global.constants";
import * as numberUtils from "utils";

export const useSportEventsData = (): SportEventsData => {
  const urlParams = useParams<SportEventsURLParams>();

  const formattedData: SportEventsData["formattedData"] = useMemo(() => {
    const sportId = numberUtils.isInteger(urlParams[URL_PARAMS.SPORT_ID])
      ? Number(urlParams[URL_PARAMS.SPORT_ID])
      : null

    return {
      sportId
    }
  }, [urlParams]);

  return {
    formattedData
  }
}