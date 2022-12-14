import type {SelectorsData} from "./useSelectorsData.types";
import type {SelectorsProps} from "../Selectors.types";

import {useMemo, useState} from "react";
import {formatSelectorsForFlowChart} from "./useSelectorsData.helpers";

export const useSelectorsData = (props: Pick<SelectorsProps, 'isEditable'>): SelectorsData => {
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
    const selectorNodes = formatSelectorsForFlowChart({
      selectors: localState.selectors,
      isEditable: props.isEditable
    });

    return {
      selectorNodes
    }
  }, [localState.selectors]);

  return {
    localState,
    localActions,
    formattedData
  }
}