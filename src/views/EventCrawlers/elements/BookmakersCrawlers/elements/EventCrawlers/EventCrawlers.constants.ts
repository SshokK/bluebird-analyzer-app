import type {TableProps} from "components";

import {COLUMN_DATA_TYPES, COLUMN_TYPES, TABLE_COLUMN_WIDTHS} from "components";

import {ActionsCell, StatusCell} from "./elements";

export const ANIMATION_TIMING = 1000;

export enum EVENT_CRAWLERS_TABLE_COLUMN_KEYS {
  ID= 'id',
  CRAWLER_ID = 'CrawlerId',
  STATUS= 'Crawler.status',
  SPORT_NAME = 'Sport.name',
  NAME= 'Crawler.name',
  TARGET_URL= 'Crawler.targetUrl',
  CREATED_AT= 'createdAt',
  UPDATED_AT= 'updatedAt',
  DELETED_AT= 'deletedAt',
  ACTIONS = 'actions'
}

export const EVENT_CRAWLERS_TABLE_COLUMNS: Required<TableProps>['columns'] = [
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.STATUS,
    title: 'Status',
    width: TABLE_COLUMN_WIDTHS.L,
    type: COLUMN_TYPES.DATA_COLUMN,
    CellComponent: StatusCell,
    isSortable: true
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.NAME,
    title: 'Name',
    width: TABLE_COLUMN_WIDTHS.XXL,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT,
    isSortable: true
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.SPORT_NAME,
    title: 'Sport',
    width: TABLE_COLUMN_WIDTHS.XXL,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT,
    isSortable: true
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.TARGET_URL,
    title: 'Target URL',
    width: TABLE_COLUMN_WIDTHS.XXL,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.URL,
    isSortable: true
  },
  // {
  //   key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.CREATED_AT,
  //   title: 'Created At',
  //   width: TABLE_COLUMN_WIDTHS.XL,
  //   type: COLUMN_TYPES.DATA_COLUMN,
  //   dataType: COLUMN_DATA_TYPES.DATE_TIME,
  //   isSortable: true
  // },
  // {
  //   key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.UPDATED_AT,
  //   title: 'Updated At',
  //   width: TABLE_COLUMN_WIDTHS.XL,
  //   type: COLUMN_TYPES.DATA_COLUMN,
  //   dataType: COLUMN_DATA_TYPES.DATE_TIME,
  //   isSortable: true
  // },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.CRAWLER_ID,
    type: COLUMN_TYPES.DATA_COLUMN,
    CellComponent: () => null
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.ACTIONS,
    type: COLUMN_TYPES.DISPLAY_COLUMN,
    CellComponent: ActionsCell
  }
]

export enum ACTION_KEYS {
  CREATE = 'create',
  BULK_MAKE_INACTIVE = 'bulkMakeInactive',
  BULK_MAKE_ACTIVE = 'bulkMakeActive'
}