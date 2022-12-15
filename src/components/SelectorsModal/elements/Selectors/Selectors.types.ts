import type {CrawlerSchema} from "features/crawlers/crawlers.api.types";
import type {CrawlerPageSelectorSchema} from "features/crawler-page-selectors/crawlerPageSelectors.api.types";

export type CrawlerPageSelectorForChart = Pick<CrawlerPageSelectorSchema, 'value' | 'valueType' | 'targetType' | 'dataKey' | "parentSelectorId"> & {
  id: CrawlerPageSelectorSchema['id'] | string
}

export type SelectorsProps = {
  crawlerId: CrawlerSchema['id'];
  isEditable: boolean;
  onIsLoadingChange: (isLoading: boolean) => void;
  onCrawlerNameChange: (name: string) => void;
  onInvalidCrawlersChange: (areAllSelectorsValid: boolean) => void;
}