import type {SelectorsModalData} from "./useSelectorsModalData.types";

import {useMemo, useState} from "react";

export const useSelectorsModalData = (): SelectorsModalData => {
  const [crawlerName, setCrawlerName] = useState<
    SelectorsModalData['localState']['crawlerName']
  >('');
  const [isLoading, setIsLoading] = useState<
    SelectorsModalData['localState']['isLoading']
  >(false);
  const [areAllSelectorsValid, setAreAllSelectorsValid] = useState<
    SelectorsModalData['localState']['areAllSelectorsValid']
  >(false);
  const [selectors, setSelectors] = useState<
    SelectorsModalData['localState']['selectors']
  >([]);

  const localState: SelectorsModalData['localState'] = {
    crawlerName,
    isLoading,
    areAllSelectorsValid,
    selectors
  }

  const localActions: SelectorsModalData['localActions'] = useMemo(() => ({
    setCrawlerName,
    setIsLoading,
    setAreAllSelectorsValid,
    setSelectors
  }), []);

  return {
    localState,
    localActions
  }
}