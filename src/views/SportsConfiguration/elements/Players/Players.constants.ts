import type {TableProps} from "components";

import {COLUMN_DATA_TYPES, COLUMN_TYPES, TABLE_COLUMN_WIDTHS} from "components";
import {ActionsCell} from "./elements";

export const ANIMATION_TIMING = 800;

export enum PLAYERS_TABLE_COLUMN_KEYS {
  ID = 'id',
  NAME = 'name',
  IMAGE_URL = 'imageUrl',
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  DELETED_AT = 'deletedAt',
  ACTIONS = 'actions'
}

export const PLAYERS_PER_PAGE = 5;

export const PLAYERS_TABLE_COLUMNS: Required<TableProps>['columns'] = [
  {
    key: PLAYERS_TABLE_COLUMN_KEYS.IMAGE_URL,
    type: COLUMN_TYPES.DATA_COLUMN,
    width: TABLE_COLUMN_WIDTHS.L,
    dataType: COLUMN_DATA_TYPES.AVATAR
  },
  {
    key: PLAYERS_TABLE_COLUMN_KEYS.NAME,
    title: 'Name',
    width: TABLE_COLUMN_WIDTHS.XXL,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT,
    isSortable: true
  },
  {
    key: PLAYERS_TABLE_COLUMN_KEYS.CREATED_AT,
    title: 'Created At',
    width: TABLE_COLUMN_WIDTHS.XL,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.DATE_TIME,
    isSortable: true
  },
  {
    key: PLAYERS_TABLE_COLUMN_KEYS.UPDATED_AT,
    title: 'Updated At',
    width: TABLE_COLUMN_WIDTHS.XL,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.DATE_TIME,
    isSortable: true
  },
  {
    key: PLAYERS_TABLE_COLUMN_KEYS.DELETED_AT,
    title: 'Deleted At',
    width: TABLE_COLUMN_WIDTHS.XL,
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.DATE_TIME,
    isSortable: true
  },
  {
    key: PLAYERS_TABLE_COLUMN_KEYS.ACTIONS,
    type: COLUMN_TYPES.DISPLAY_COLUMN,
    CellComponent: ActionsCell
  }
]

export enum PLAYERS_ACTIONS {
  ADD = 'ADD',
  DELETE = 'DELETE'
}

export enum MODAL_FIELD_KEYS {
  NAME = 'name',
  IMAGE_URL = 'imageUrl'
}