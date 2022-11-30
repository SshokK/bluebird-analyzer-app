import {ActionsCell, DelayCell, StatusCell} from "./elements";

import {SORT_ORDERS} from "constants/global.constants";
import {COLUMN_DATA_TYPES, COLUMN_TYPES, TableProps} from "components";

export const ANIMATION_DELAY = 300;

export enum REGION_PROXIES_ACTIONS {
  ADD = 'add',
  DELETE = 'delete'
}

export enum REGION_PROXIES_TABLE_COLUMN_KEYS {
  ID= 'id',
  IP= 'ip',
  PORT= 'port',
  TYPE= 'type',
  STATUS = 'status',
  LAST_PING_RESPONSE_TIME = 'lastPingResponseTime',
  REGION_ID = 'regionId',
  ACTIONS = 'actions'
}

export const REGION_PROXIES_TABLE_COLUMNS: Required<TableProps>['columns'] = [
  {
    key: REGION_PROXIES_TABLE_COLUMN_KEYS.STATUS,
    title: 'Status',
    type: COLUMN_TYPES.DATA_COLUMN,
    CellComponent: StatusCell,
    isSortable: true,
    isInitialSortColumn: true,
    initialSortOrder: SORT_ORDERS.ASC
  },
  {
    key: REGION_PROXIES_TABLE_COLUMN_KEYS.IP,
    title: 'IP',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT
  },
  {
    key: REGION_PROXIES_TABLE_COLUMN_KEYS.PORT,
    title: 'Port',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT
  },
  {
    key: REGION_PROXIES_TABLE_COLUMN_KEYS.TYPE,
    title: 'Protocol',
    type: COLUMN_TYPES.DATA_COLUMN,
    dataType: COLUMN_DATA_TYPES.TEXT
  },
  {
    key: REGION_PROXIES_TABLE_COLUMN_KEYS.LAST_PING_RESPONSE_TIME,
    title: 'Delay',
    type: COLUMN_TYPES.DATA_COLUMN,
    isSortable: true,
    CellComponent: DelayCell
  },
  {
    key: REGION_PROXIES_TABLE_COLUMN_KEYS.REGION_ID,
    type: COLUMN_TYPES.DATA_COLUMN,
    CellComponent: () => null
  },
  {
    key: REGION_PROXIES_TABLE_COLUMN_KEYS.ACTIONS,
    type: COLUMN_TYPES.DISPLAY_COLUMN,
    CellComponent: ActionsCell
  }
]