import type {CrawlerSchema} from "features/crawlers/crawlers.api.types";
import type {CrawlerPageSelector} from "features/crawler-page-selectors/crawlerPageSelectors.types";

export type SelectorsProps = {
  crawlerId: CrawlerSchema['id'];
  isEditable: boolean;
  onIsLoadingChange: (isLoading: boolean) => void;
  onCrawlerNameChange: (name: string) => void;
  onInvalidCrawlersChange: (areAllSelectorsValid: boolean) => void;
  onSelectorsChange: (crawlerPageSelectors: CrawlerPageSelector[]) => void;
}