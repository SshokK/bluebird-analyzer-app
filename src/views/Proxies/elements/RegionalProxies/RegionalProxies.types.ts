import type {QUERY_PARAMS} from "./RegionalProxies.constants";
import type {RegionSchema} from "features/regions/regions.api.types";

export type RegionalProxiesQueryParams = {
  [QUERY_PARAMS.REGION_ID]: RegionSchema['id'] | null;
}