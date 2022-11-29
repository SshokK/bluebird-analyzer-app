import type {RegionProxiesData} from "./useRegionProxiesData.types";

import {useMemo, useState} from "react";

export const useRegionProxiesData = (): RegionProxiesData => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<RegionProxiesData['localState']['selectedRowKeys']>([]);

  const localState: RegionProxiesData['localState'] = {
    selectedRowKeys
  }

  const localActions: RegionProxiesData['localActions'] = useMemo(() => ({
    setSelectedRowKeys
  }), []);

  return {
    localState,
    localActions
  }
}