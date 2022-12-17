import type {CrawlerPageSelectorSchema} from "./crawlerPageSelectors.api.types";

export const isCrawlerPageSelectorValid = (
  crawlerPageSelector: Partial<Omit<CrawlerPageSelectorSchema, 'id' | 'parentSelectorId'>>
): boolean => {
  return Boolean(
    crawlerPageSelector.value &&
    crawlerPageSelector.valueType &&
    crawlerPageSelector.targetType
  )
}