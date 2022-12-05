import type {TableProps} from "components";

import {COLUMN_DATA_TYPES, COLUMN_TYPES} from "components";

export const ANIMATION_DELAY = 1000;

export enum TEAMS_TABLE_COLUMN_KEYS {
  ID = 'id',
  NAME = 'name',
  IMAGE_URL = 'imageUrl',
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  DELETED_AT = 'deletedAt'
}

export const TEAMS_PER_PAGE = 5;

export const TEAMS_TABLE_COLUMNS: Required<TableProps>['columns'] = [
  {
    key: TEAMS_TABLE_COLUMN_KEYS.IMAGE_URL,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.AVATAR
  },
  {
    key: TEAMS_TABLE_COLUMN_KEYS.NAME,
    title: 'Name',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT,
    isSortable: true
  },
  {
    key: TEAMS_TABLE_COLUMN_KEYS.CREATED_AT,
    title: 'Created At',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.DATE_TIME,
    isSortable: true
  },
  {
    key: TEAMS_TABLE_COLUMN_KEYS.UPDATED_AT,
    title: 'Updated At',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.DATE_TIME,
    isSortable: true
  },
  {
    key: TEAMS_TABLE_COLUMN_KEYS.DELETED_AT,
    title: 'Deleted At',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.DATE_TIME,
    isSortable: true
  }
]