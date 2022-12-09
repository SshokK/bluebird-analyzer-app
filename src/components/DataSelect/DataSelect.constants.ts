import type {SelectProps} from "../Select";

import {QUERY_KEYS} from "constants/queries.constants";
import {SORT_ORDERS} from "constants/global.constants";

import * as regionsApi from "features/regions/regions.api";
import * as regionsApiSelectors from "features/regions/regions.api.selectors";
import * as regionsApiConstants from "features/regions/regions.api.constants";

import * as sportsApi from "features/sports/sports.api";
import * as sportsApiSelectors from "features/sports/sports.api.selectors";
import * as sportsApiConstants from "features/sports/sports.api.constants";

export enum DATA_TYPES {
  REGIONS = 'regions',
  SPORTS = 'sport'
}

export const DATA_CONFIG: Record<DATA_TYPES, {
  label: string;
  queryOptions?: SelectProps['queryOptions'];
  options?: SelectProps['options'];
}> = {
  [DATA_TYPES.REGIONS]: {
    label: 'regions',
    queryOptions: {
      queryKey: [QUERY_KEYS.REGIONS, {
        sortField: regionsApiConstants.SORT_FIELDS.NAME,
        sortOrder: SORT_ORDERS.ASC
      }],
      queryFn: () => regionsApi.fetchRegions({
        sortField: regionsApiConstants.SORT_FIELDS.NAME,
        sortOrder: SORT_ORDERS.ASC
      }),
      select: regionsApiSelectors.formatRegionsForSelect
    }
  },
  [DATA_TYPES.SPORTS]: {
    label: 'sports',
    queryOptions: {
      queryKey: [QUERY_KEYS.SPORTS, {
        sortField: sportsApiConstants.SORT_FIELDS.NAME,
        sortOrder: SORT_ORDERS.ASC
      }],
      queryFn: () => sportsApi.fetchSports({
        sortField: sportsApiConstants.SORT_FIELDS.NAME,
        sortOrder: SORT_ORDERS.ASC
      }),
      select: sportsApiSelectors.formatSportsForSelect
    }
  }
}