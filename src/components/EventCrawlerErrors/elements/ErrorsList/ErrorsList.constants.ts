import type {TableProps} from "../../../Table";

import {COLUMN_DATA_TYPES, COLUMN_TYPES, TABLE_COLUMN_WIDTHS} from "../../../Table";
import {SORT_ORDERS} from "constants/global.constants";

export enum ERRORS_TABLE_COLUMN_KEYS {
  COLOR = 'color',
  MESSAGE = 'message',
  CREATED_AT = 'createdAt'
}

export const ERRORS_TABLE_COLUMNS: Required<TableProps>['columns'] = [
  {
    key: ERRORS_TABLE_COLUMN_KEYS.COLOR,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.COLOR,
    width: TABLE_COLUMN_WIDTHS.S,
    title: 'Color',
  },
  {
    key: ERRORS_TABLE_COLUMN_KEYS.MESSAGE,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT,
    title: 'Message'
  }
]

export const DEFAULT_SORT_PARAMS = {
  sortField: 'createdAt',
  sortOrder: SORT_ORDERS.DESC
}