import type {BookmakersCrawlersData} from "./useBookmakersCrawlersData.types";
import type {BookmakersCrawlersLocalState} from "./useBookmakersCrawlersData.types";

import {QUERY_PARAMS} from "../BookmakersCrawlers.constants";
import {PARAM_TYPES} from "constants/global.constants";
import {SORT_FIELDS} from "features/bookmakers/bookmakers.api.constants";

import {useMemo, useState} from "react";
import {useStateQueryParam} from "utils/hooks/useStateQueryParam";

export const useBookmakersCrawlersData = (): BookmakersCrawlersData => {
  const [nameFilter, setNameFilter] = useState<BookmakersCrawlersLocalState['nameFilter']>('');

  const [sortOrder, setSortOrder] = useStateQueryParam<BookmakersCrawlersLocalState['sortOrder']>(
    null,
    QUERY_PARAMS.BOOKMAKERS_SORT_ORDER,
    {
      isStrictValidation: true,
      shouldKeepExistingParams: true,
      paramsTypes: {
        [QUERY_PARAMS.BOOKMAKER_ID]: PARAM_TYPES.STRING
      }
    }
  )

  const [bookmakerId, setBookmakerId] = useStateQueryParam<BookmakersCrawlersLocalState['bookmakerId']>(
    null,
    QUERY_PARAMS.BOOKMAKER_ID,
    {
      isStrictValidation: true,
      shouldKeepExistingParams: true,
      paramsTypes: {
        [QUERY_PARAMS.BOOKMAKER_ID]: PARAM_TYPES.INTEGER
      }
    }
  );


  const localState: BookmakersCrawlersData['localState'] = {
    sortOrder,
    nameFilter,
    bookmakerId
  }

  const localActions: BookmakersCrawlersData['localActions'] = useMemo(() => ({
    setSortOrder,
    setNameFilter,
    setBookmakerId
  }), [setBookmakerId, setSortOrder]);

  const formattedData: BookmakersCrawlersData['formattedData'] = useMemo(() => {
    const requestParams = {
      sortOrder: localState.sortOrder ?? undefined,
      sortField: localState.sortOrder ? SORT_FIELDS.NAME : SORT_FIELDS.CREATED_AT,
      name: localState.nameFilter || undefined
    };

    return {
      requestParams
    }
  }, [localState.nameFilter, localState.sortOrder])

  return {
    localState,
    localActions,
    formattedData
  }
}