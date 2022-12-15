import type {CrawlerPageSelectorSchema} from "./crawlerPageSelectors.api.types";

export const isCrawlerPageSelectorValid = (
  crawlerPageSelector: Partial<Omit<CrawlerPageSelectorSchema, 'id'>>
): boolean => {
  return Boolean(
    crawlerPageSelector.value &&
    crawlerPageSelector.valueType &&
    crawlerPageSelector.targetType
  )
}