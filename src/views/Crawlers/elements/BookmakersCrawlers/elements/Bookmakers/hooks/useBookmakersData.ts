import type {BookmakersData} from "./useBookmakersData.types";
import type {BookmakersLocalState} from "./useBookmakersData.types";

import {QUERY_PARAMS} from "../Bookmakers.constants";
import {PARAM_TYPES} from "constants/global.constants";
import {SORT_FIELDS} from "features/bookmakers/bookmakers.api.constants";

import {useMemo, useState} from "react";
import {useStateQueryParam} from "utils/hooks/useStateQueryParam";

export const useBookmakersData = (): BookmakersData => {
  const [nameFilter, setNameFilter] = useState<BookmakersLocalState['nameFilter']>('');

  const [sortOrder, setSortOrder] = useStateQueryParam<BookmakersLocalState['sortOrder']>(
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

  const [bookmakerId, setBookmakerId] = useStateQueryParam<BookmakersLocalState['bookmakerId']>(
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


  const localState: BookmakersData['localState'] = {
    sortOrder,
    nameFilter,
    bookmakerId
  }

  const localActions: BookmakersData['localActions'] = useMemo(() => ({
    setSortOrder,
    setNameFilter,
    setBookmakerId
  }), [setBookmakerId, setSortOrder]);

  const formattedData: BookmakersData['formattedData'] = useMemo(() => {
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