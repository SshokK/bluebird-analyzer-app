export enum CRAWLER_PAGE_SELECTOR_VALUE_TYPES {
  CSS_SELECTOR = "cssSelector",
  X_PATH_SELECTOR = "xPathSelector",
}

export enum CRAWLER_PAGE_SELECTOR_TARGET_TYPES {
  CONTAINER = "container",
  VALUE_GROUP = "valueGroup",
  FLOAT = "float",
  STRING = "string",
  DATE = "date",
  DATE_TIME = "dateTime",
  AMERICAN_ODD = "americanOdd",
  DECIMAL_ODD = "decimalOdd",
  FRACTIONAL_ODD = "fractionalOdd",
}

export enum CRAWLER_PAGE_SELECTOR_DATA_KEYS {
  EVENT_DATE = "eventDate",
  PLAYER_NAME = "playerName",
  EVENT_PLAYER_COEFFICIENT = "eventPlayerCoefficient",
}
