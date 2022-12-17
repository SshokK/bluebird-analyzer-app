import type {CrawlerSchema} from "features/crawlers/crawlers.api.types";
import type {Dispatch, SetStateAction} from "react";
import type {CrawlerPageSelector} from "features/crawler-page-selectors/crawlerPageSelectors.types";

export type SelectorsModalLocalState = {
  crawlerName: CrawlerSchema['name'];
  isLoading: boolean;
  areAllSelectorsValid: boolean;
  selectors: CrawlerPageSelector[];
}

export type SelectorsModalLocalActions = {
  setCrawlerName: Dispatch<SetStateAction<SelectorsModalLocalState['crawlerName']>>;
  setIsLoading: Dispatch<SetStateAction<SelectorsModalLocalState['isLoading']>>;
  setAreAllSelectorsValid: Dispatch<SetStateAction<SelectorsModalLocalState['areAllSelectorsValid']>>;
  setSelectors: Dispatch<SetStateAction<SelectorsModalLocalState['selectors']>>;
}

export type SelectorsModalData = {
  localState: SelectorsModalLocalState;
  localActions: SelectorsModalLocalActions;
}