import type {
  CreateCrawlerPageSelectorsBody
} from "features/crawler-page-selectors/crawlerPageSelectors.api.types";
import type {INPUT_OUTPUT_VALUE_FORMATTERS} from "../EditForm.constants";

export type EditFormHandlers = {
  handleChange: (args: {
    field: keyof CreateCrawlerPageSelectorsBody,
    onFormatOutputValue: typeof INPUT_OUTPUT_VALUE_FORMATTERS[keyof typeof INPUT_OUTPUT_VALUE_FORMATTERS];
  }) => (value: unknown) => void;
}