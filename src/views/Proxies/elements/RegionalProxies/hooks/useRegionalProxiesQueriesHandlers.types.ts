import type {ListOption} from "components";

export type RegionalProxiesQueriesHandlers = {
  handleRegionsFetchSuccess: (regionOptions: ListOption[]) => void;
}