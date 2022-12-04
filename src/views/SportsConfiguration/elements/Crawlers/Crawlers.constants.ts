import type {TableProps} from "components";

import {COLUMN_DATA_TYPES, COLUMN_TYPES} from "components";

import {CrawlerActions} from "./elements";

export const ANIMATION_DELAY = 1000;

export enum EVENT_CRAWLERS_TABLE_COLUMN_KEYS {
  ID= 'id',
  BOOKMAKER_NAME = 'bookmakerName',
  NAME= 'name',
  TARGET_URL= 'targetUrl',
  CREATED_AT= 'createdAt',
  UPDATED_AT= 'updatedAt',
  DELETED_AT= 'deletedAt',
  STATUS= 'status',
  ACTIONS = 'actions'
}

export const EVENT_CRAWLERS_TABLE_COLUMNS: Required<TableProps>['columns'] = [
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.BOOKMAKER_NAME,
    title: 'Bookmaker',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.NAME,
    title: 'Name',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.TARGET_URL,
    title: 'Target URL',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.URL
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.STATUS,
    title: 'Status',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.CREATED_AT,
    title: 'Created At',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.DATE_TIME
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.UPDATED_AT,
    title: 'Updated At',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.DATE_TIME
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.DELETED_AT,
    title: 'Deleted At',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.DATE_TIME
  },
  {
    key: EVENT_CRAWLERS_TABLE_COLUMN_KEYS.ACTIONS,
    type: COLUMN_TYPES.DISPLAY_COLUMN,
    CellComponent: CrawlerActions
  }
]

export enum ACTION_KEYS {
  CREATE = 'create',
  BULK_MAKE_INACTIVE = 'bulkMakeInactive',
  BULK_MAKE_ACTIVE = 'bulkMakeActive',
  BULK_DELETE = 'bulkDelete'
}