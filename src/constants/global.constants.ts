export const ENV = {
  API_URL: process.env.REACT_APP_API_URL ?? ''
}

export enum SORT_ORDERS {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum ROUTES {
  DASHBOARD = 'dashboard',
  SPORT_EVENTS = 'sport-events'
}

export enum URL_PARAMS {
  SPORT_ID = 'sportId'
}

export enum DATE_FORMATS {
  LOCALIZED_DATE_TIME = 'Pp',
  LOCALIZED_DATE = 'P',
  LOCALIZED_TIME = 'p'
}