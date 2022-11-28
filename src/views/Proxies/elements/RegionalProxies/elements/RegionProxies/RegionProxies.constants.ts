import {COLUMN_DATA_TYPES, COLUMN_TYPES, TableProps} from "components";
import {StatusCell} from "./elements";

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
  LAST_PING_RESPONSE_TIME = 'lastPingResponseTime'
}

export enum REGION_PROXIES_SORT_KEYS {
  STATUS = 'status',
  LAST_PING_RESPONSE_TIME = 'lastPingResponseTime'
}

export const REGION_PROXIES_TABLE_COLUMNS: Required<TableProps>['columns'] = [
  {
    key: REGION_PROXIES_TABLE_COLUMN_KEYS.STATUS,
    title: 'Status',
    type: COLUMN_TYPES.DATA_COLUMN,
    CellComponent: StatusCell,
    sortKey: REGION_PROXIES_SORT_KEYS.STATUS
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
    dataType: COLUMN_DATA_TYPES.TEXT,
    sortKey: REGION_PROXIES_SORT_KEYS.LAST_PING_RESPONSE_TIME
  }
]