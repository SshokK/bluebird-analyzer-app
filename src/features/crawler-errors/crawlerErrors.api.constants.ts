export enum CRAWLER_ERROR_TYPES {
  INVALID_SELECTOR = "invalidSelector",
  TIMEOUT = "timeout",
  INVALID_VALUES = "invalidValues",
  NO_ROOT_SELECTORS = 'noRootSelectors',
  NO_EXISTING_PROXIES = 'noExistingProxies',
  UNKNOWN = "unknown",
}

export enum CRAWLER_ERROR_AGGREGATION_TYPES {
  BY_TYPE = 'byType'
}