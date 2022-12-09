export const ENV = {
  API_URL: process.env.REACT_APP_API_URL ?? ''
}

export enum SORT_ORDERS {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum ROUTES {
  DASHBOARD = 'dashboard',
  SPORT_FAMILY_EVENTS = 'sport-family-events',
  SPORTS_CONFIGURATION = 'sports-configuration',
  CRAWLERS = 'crawlers',
  PROXIES = 'proxies'
}

export enum URL_PARAMS {
  SPORT_FAMILY_ID = 'sportFamilyId'
}

export enum DATE_FORMATS {
  DATE = 'y-M-dd',
  DATE_TIME = 'y-M-dd p',
  LOCALIZED_DATE_TIME = 'Pp',
  LOCALIZED_DATE = 'P',
  LOCALIZED_TIME = 'p'
}

export enum PARAM_TYPES {
  INTEGER = 'integer',
  STRING = 'string'
}

export const DEFAULT_ERROR_MESSAGE = 'Something went wrong'