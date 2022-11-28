import type {ListProps, ListOption } from "components";
import type {RegionSchema} from "features/regions/regions.api.types";
import type * as regionsApi from "features/regions/regions.api";

export type RegionalProxiesHandlers = {
  handleSelectedRegionChange: (regionId: RegionSchema['id'] | null) => void;
  handleSelectedRegionOptionChange: Required<ListProps>['onSelectedOptionsChange'];
  handleRegionsFetchSuccess: (regionOptions: ListOption[]) => void;
  handleRegionCreationSuccess: (region: Awaited<ReturnType<typeof regionsApi.createRegion>>) => Promise<void>;
  handleRegionUpdateSuccess: (region: Awaited<ReturnType<typeof regionsApi.updateRegion>>) => Promise<void>;
  handleRegionDeletionSuccess: () => Promise<void>;
}