import type {DataSelect, TextField} from "components";
import type {ComponentProps} from "react";
import type {CrawlerPageSelectorForChart} from "../../../../Selectors.types";

export type EditFormInputComponent = typeof TextField | typeof DataSelect;
export type EditFormInputComponentProps = ComponentProps<typeof TextField> | ComponentProps<typeof DataSelect>;

export type EditFormProps = {
  crawlerPageSelector: CrawlerPageSelectorForChart;
  onSelectorChange: (crawlerPageSelector: CrawlerPageSelectorForChart) => void;
}