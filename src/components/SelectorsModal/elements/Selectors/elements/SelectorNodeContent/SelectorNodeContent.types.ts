import type {CrawlerPageSelectorForChart} from "../../Selectors.types";

export type SelectorNodeContentProps = {
  crawlerPageSelector: CrawlerPageSelectorForChart;
  onSelectorChange: (crawlerPageSelector: CrawlerPageSelectorForChart) => void;
  isEditable: boolean;
}