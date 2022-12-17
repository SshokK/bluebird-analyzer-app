import type {DataSelect, TextField} from "components";
import type {ComponentProps} from "react";
import type {CrawlerPageSelector} from "features/crawler-page-selectors/crawlerPageSelectors.types";

export type EditFormInputComponent = typeof TextField | typeof DataSelect;
export type EditFormInputComponentProps = ComponentProps<typeof TextField> | ComponentProps<typeof DataSelect>;

export type EditFormProps = {
  crawlerPageSelector: CrawlerPageSelector;
  onSelectorChange: (crawlerPageSelector: CrawlerPageSelector) => void;
}