import type {RegionSchema} from "features/regions/regions.api.types";

export type RegionProxiesProps = {
  regionId: RegionSchema['id'] | null;
}