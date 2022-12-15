import type {SelectorsData} from "./useSelectorsData.types";

import {useMemo, useState} from "react";
import {isCrawlerPageSelectorValid} from "../../../../../features/crawler-page-selectors/crawlerPageSelectors.utils";

export const useSelectorsData = (): SelectorsData => {
  const [isInitialFetch, setIsInitialFetch] = useState<
    SelectorsData['localState']['isInitialFetch']
  >(true);
  const [selectedSelectors, setSelectedSelectors] = useState<
    SelectorsData['localState']['selectedSelectors']
  >([]);
  const [selectors, setSelectors] = useState<
    SelectorsData['localState']['selectors']
  >([]);

  const localState: SelectorsData['localState'] = {
    isInitialFetch,
    selectedSelectors,
    selectors
  }

  const localActions: SelectorsData['localActions'] = useMemo(() => ({
    setIsInitialFetch,
    setSelectedSelectors,
    setSelectors
  }), []);

  const formattedData: SelectorsData['formattedData'] = useMemo(() => {
    const areAllSelectorsValid = localState.selectors.every(isCrawlerPageSelectorValid);

    return {
      areAllSelectorsValid
    }
  }, [localState.selectors])

  return {
    localState,
    localActions,
    formattedData
  }
}