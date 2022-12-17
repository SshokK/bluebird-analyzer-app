import type {CrawlerPageSelector} from "./crawlerPageSelectors.types";
import type {CreateCrawlerPageSelectorsBody} from "./crawlerPageSelectors.api.types";

import * as utils from "utils";

export const formatCreateCrawlerPageSelectorsBody = (selectors: CrawlerPageSelector[]): CreateCrawlerPageSelectorsBody[] => {
  const hashTable: Record<CrawlerPageSelector['id'], CreateCrawlerPageSelectorsBody> = {}

  selectors.forEach(selector => hashTable[selector.id] = utils.omitNulls({ ...selector, children: [] }));

  const dataTree: CreateCrawlerPageSelectorsBody[] = [];

  selectors.forEach(selector => {
    if (selector.parentSelectorId) {
      hashTable[selector.parentSelectorId]?.children?.push?.(hashTable[selector.id])
    } else {
      dataTree.push(hashTable[selector.id])
    }
  });

  return dataTree;
}