import type {RegionSchema} from "features/regions/regions.api.types";

export type RegionalProxiesFormattedData = {
  regionId: RegionSchema['id'] | null;
}

export type RegionalProxiesData = {
  formattedData: RegionalProxiesFormattedData;
}