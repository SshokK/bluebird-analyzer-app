import type {Dispatch, SetStateAction} from "react";
import type {ProxySchema} from "features/proxies/proxies.api.types";

export type RegionLocalState = {
  selectedRowKeys: ProxySchema['id'][]
}

export type RegionLocalActions = {
  setSelectedRowKeys: Dispatch<SetStateAction<RegionLocalState['selectedRowKeys']>>
}

export type RegionProxiesData = {
  localState: RegionLocalState;
  localActions: RegionLocalActions
}