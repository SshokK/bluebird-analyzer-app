import type {Dispatch, SetStateAction} from "react";
import type {CrawlerPageSelectorForChart} from "../Selectors.types";

export type SelectorsLocalState = {
  isInitialFetch: boolean;
  selectors: CrawlerPageSelectorForChart[]
  selectedSelectors: CrawlerPageSelectorForChart[];
}

export type SelectorsLocalActions = {
  setIsInitialFetch: Dispatch<SetStateAction<SelectorsLocalState['isInitialFetch']>>;
  setSelectors: Dispatch<SetStateAction<SelectorsLocalState['selectors']>>;
  setSelectedSelectors: Dispatch<SetStateAction<SelectorsLocalState['selectedSelectors']>>;
}

export type SelectorsFormattedData = {
  areAllSelectorsValid: boolean
}

export type SelectorsData = {
  localState: SelectorsLocalState;
  localActions: SelectorsLocalActions;
  formattedData: SelectorsFormattedData;
}