import type {CrawlerPageSelectorSchema} from "./crawlerPageSelectors.api.types";
import type {LocalUniqueId} from "types/global.types";

export type CrawlerPageSelector = Omit<CrawlerPageSelectorSchema, 'id' | 'parentSelectorId'> & {
  id: CrawlerPageSelectorSchema['id'] | LocalUniqueId;
  parentSelectorId: CrawlerPageSelectorSchema['parentSelectorId'] | LocalUniqueId;
}
