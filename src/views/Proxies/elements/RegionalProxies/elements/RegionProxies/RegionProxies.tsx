import type {FC} from "react";
import type {RegionProxiesProps} from "./RegionProxies.types";

import React from 'react';
import {Animation, ANIMATION_DIRECTION, ANIMATION_ORIENTATION, ANIMATION_TYPES, Table} from "components";
import {
  ANIMATION_DELAY,
  REGION_PROXIES_TABLE_COLUMN_KEYS,
  REGION_PROXIES_TABLE_COLUMNS
} from "./RegionProxies.constants";
import {
  useRegionProxiesActions,
  useRegionProxiesData,
  useRegionProxiesMutations,
  useRegionProxiesQueryOptions
} from "./hooks";

export const RegionProxies: FC<RegionProxiesProps> = ({
  regionId
}) => {
  const { localState, localActions } = useRegionProxiesData();

  const mutations = useRegionProxiesMutations({
    localState,
    localActions
  })

  const actions = useRegionProxiesActions({
    props: {
      regionId
    },
    localState,
    mutations
  });

  const tableQueryOptions = useRegionProxiesQueryOptions({
    props: {
      regionId
    }
  });

  return (
    <Animation
      type={ANIMATION_TYPES.GROW}
      shouldAppear={Boolean(regionId)}
      direction={ANIMATION_DIRECTION.LEFT}
      orientation={ANIMATION_ORIENTATION.HORIZONTAL}
      animationDelay={ANIMATION_DELAY}
    >
      <Table
        actions={actions}
        columns={REGION_PROXIES_TABLE_COLUMNS}
        queryOptions={tableQueryOptions}
        rowId={REGION_PROXIES_TABLE_COLUMN_KEYS.ID}
        areRowsSelectable
        selectedRowKeys={localState.selectedRowKeys}
        onSelectedRowsChange={localActions.setSelectedRowKeys}
        queryParams={{
          regionId
        }}
      />
    </Animation>
  )
}