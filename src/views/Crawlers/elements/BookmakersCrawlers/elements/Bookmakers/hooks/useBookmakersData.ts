import type {BookmakersData} from "./useBookmakersData.types";
import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";

import {QUERY_PARAMS} from "../Bookmakers.constants";
import {PARAM_TYPES} from "constants/global.constants";

import {useMemo} from "react";
import {useStateQueryParam} from "utils/hooks/useStateQueryParam";

export const useBookmakersData = (): BookmakersData => {
  const [bookmakerId, setBookmakerId] = useStateQueryParam<BookmakerSchema['id'] | null>(
    null,
    QUERY_PARAMS.BOOKMAKER_ID,
    {
      isStrictValidation: true,
      paramsTypes: {
        [QUERY_PARAMS.BOOKMAKER_ID]: PARAM_TYPES.INTEGER
      }
    }
  );

  const localState: BookmakersData['localState'] = {
    bookmakerId
  }

  const localActions: BookmakersData['localActions'] = useMemo(() => ({
    setBookmakerId
  }), [setBookmakerId])

  return {
    localState,
    localActions
  }
}