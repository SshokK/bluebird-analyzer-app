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
  PROXIES = 'proxies'
}

export enum URL_PARAMS {
  SPORT_FAMILY_ID = 'sportFamilyId'
}

export enum DATE_FORMATS {
  LOCALIZED_DATE_TIME = 'Pp',
  LOCALIZED_DATE = 'P',
  LOCALIZED_TIME = 'p'
}

export enum PARAM_TYPES {
  INTEGER = 'integer',
  STRING = 'string'
}