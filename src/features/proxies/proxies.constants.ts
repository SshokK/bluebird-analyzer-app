import type {SelectOption} from "components";

export enum PROXY_TYPES {
  HTTP = 'http',
  HTTPS = 'https',
  SOCKS_4 = 'socks4',
  SOCKS_5 = 'socks5'
}

export enum PROXY_STATUSES {
  WORKING = 'working',
  DEAD = 'dead'
}

export const PROXY_PROTOCOL_OPTIONS: SelectOption<PROXY_TYPES>[] = [
  {
    value: PROXY_TYPES.HTTP,
    label: 'http'
  },
  {
    value: PROXY_TYPES.HTTPS,
    label: 'https'
  },
  {
    value: PROXY_TYPES.SOCKS_4,
    label: 'socks4'
  },
  {
    value: PROXY_TYPES.SOCKS_5,
    label: 'socks5'
  }
]