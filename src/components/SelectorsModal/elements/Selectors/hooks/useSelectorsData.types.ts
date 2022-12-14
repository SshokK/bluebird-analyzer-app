import type {Dispatch, SetStateAction} from "react";
import type {CrawlerPageSelectorSchema} from "features/crawler-page-selectors/crawlerPageSelectors.api.types";
import type {FlowChartNode} from "../../../../FlowChart";

export type SelectorsLocalState = {
  isInitialFetch: boolean;
  selectors: Partial<CrawlerPageSelectorSchema>[]
  selectedSelectors: Partial<CrawlerPageSelectorSchema>[];
}

export type SelectorsLocalActions = {
  setIsInitialFetch: Dispatch<SetStateAction<SelectorsLocalState['isInitialFetch']>>;
  setSelectors: Dispatch<SetStateAction<SelectorsLocalState['selectors']>>;
  setSelectedSelectors: Dispatch<SetStateAction<SelectorsLocalState['selectedSelectors']>>;
}

export type SelectorsFormattedData = {
  selectorNodes: FlowChartNode[];
}

export type SelectorsData = {
  localState: SelectorsLocalState;
  localActions: SelectorsLocalActions;
  formattedData: SelectorsFormattedData;
}