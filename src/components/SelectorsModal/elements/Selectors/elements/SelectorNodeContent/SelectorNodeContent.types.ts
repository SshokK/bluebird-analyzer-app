import type {CrawlerPageSelector} from "features/crawler-page-selectors/crawlerPageSelectors.types";
import type {FlowChartCustomNodeContentProps} from "../../../../../FlowChart";
import type {Optional} from "types/global.types";

export type SelectorNodeContentProps = Optional<FlowChartCustomNodeContentProps, 'isSelected'> & {
  crawlerPageSelector: CrawlerPageSelector;
  onSelectorChange: (crawlerPageSelector: CrawlerPageSelector) => void;
  isEditable: boolean;
}