import type {CreateCrawlerPageSelectorsBody} from "features/crawler-page-selectors/crawlerPageSelectors.api.types";
import type {EditFormInputComponent, EditFormInputComponentProps} from "./EditForm.types";

import {DATA_SELECT_DATA_TYPES, DataSelect, TextField} from "components";

export enum INPUTS_CONFIG_INPUT_TYPES {
  DATA_SELECT = 'dataSelect',
  TEXTFIELD = 'textField'
}

export enum INPUTS_CONFIG_KEYS {
  TARGET_TYPE = 'targetType',
  VALUE_TYPE = 'valueType',
  VALUE = 'value',
  DATA_KEY = 'dataKey'
}

export const INPUTS: Record<INPUTS_CONFIG_INPUT_TYPES, EditFormInputComponent> = {
  [INPUTS_CONFIG_INPUT_TYPES.TEXTFIELD]: TextField,
  [INPUTS_CONFIG_INPUT_TYPES.DATA_SELECT]: DataSelect
}

export const INPUT_VALUE_FORMATTERS = {
  ARRAY: (value: unknown): unknown[] => Array.isArray(value) ? value : value ? [value] : [],
  SINGLE: (value: unknown): unknown => value ? value : null,
  SINGLE_STRING: (value: unknown): string => value ? String(value) : ''
}

export const INPUT_OUTPUT_VALUE_FORMATTERS = {
  ARRAY: (value: unknown): unknown[] => Array.isArray(value) ? value : value ? [value] : [],
  SINGLE: (value: unknown): unknown => value ? (Array.isArray(value) && value.length) ? value[0] : value : null,
}

export const INPUTS_CONFIG: Record<string, {
  type: INPUTS_CONFIG_INPUT_TYPES,
  label: string;
  onFormatValue: typeof INPUT_VALUE_FORMATTERS[keyof typeof INPUT_VALUE_FORMATTERS];
  onFormatOutputValue: typeof INPUT_OUTPUT_VALUE_FORMATTERS[keyof typeof INPUT_OUTPUT_VALUE_FORMATTERS];
  props: EditFormInputComponentProps
}> = {
  [INPUTS_CONFIG_KEYS.VALUE]: {
    type: INPUTS_CONFIG_INPUT_TYPES.TEXTFIELD,
    label: 'value',
    onFormatValue: INPUT_VALUE_FORMATTERS.SINGLE_STRING,
    onFormatOutputValue: INPUT_OUTPUT_VALUE_FORMATTERS.SINGLE,
    props: {
      isRequired: true,
      isMultiline: true,
      maxLinesCount: 4,
      minLinesCount: 4
    }
  },
  [INPUTS_CONFIG_KEYS.VALUE_TYPE]: {
    type: INPUTS_CONFIG_INPUT_TYPES.DATA_SELECT,
    label: 'value type',
    onFormatValue: INPUT_VALUE_FORMATTERS.ARRAY,
    onFormatOutputValue: INPUT_OUTPUT_VALUE_FORMATTERS.SINGLE,
    props: {
      isRequired: true,
      dataType: DATA_SELECT_DATA_TYPES.CRAWLER_PAGE_SELECTOR_VALUE_TYPES
    }
  },
  [INPUTS_CONFIG_KEYS.TARGET_TYPE]: {
    type: INPUTS_CONFIG_INPUT_TYPES.DATA_SELECT,
    label: 'target type',
    onFormatValue: INPUT_VALUE_FORMATTERS.ARRAY,
    onFormatOutputValue: INPUT_OUTPUT_VALUE_FORMATTERS.SINGLE,
    props: {
      isRequired: true,
      dataType: DATA_SELECT_DATA_TYPES.CRAWLER_PAGE_SELECTOR_TARGET_TYPES
    }
  },
  [INPUTS_CONFIG_KEYS.DATA_KEY]: {
    type: INPUTS_CONFIG_INPUT_TYPES.DATA_SELECT,
    label: 'data key',
    onFormatValue: INPUT_VALUE_FORMATTERS.ARRAY,
    onFormatOutputValue: INPUT_OUTPUT_VALUE_FORMATTERS.SINGLE,
    props: {
      dataType: DATA_SELECT_DATA_TYPES.CRAWLER_PAGE_SELECTOR_DATA_KEYS
    }
  }
}