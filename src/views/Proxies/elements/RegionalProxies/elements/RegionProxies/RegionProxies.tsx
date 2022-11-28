import type {FC} from "react";
import type {RegionProxiesProps} from "./RegionProxies.types";

import React from 'react';
import {Animation, ANIMATION_DIRECTION, ANIMATION_ORIENTATION, ANIMATION_TYPES, Table} from "components";
import {ANIMATION_DELAY, REGION_PROXIES_TABLE_COLUMNS} from "./RegionProxies.constants";
import {useRegionProxiesActions, useRegionProxiesQueryOptions} from "./hooks";

export const RegionProxies: FC<RegionProxiesProps> = ({
  regionId
}) => {
  const actions = useRegionProxiesActions();

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
        queryParams={{
          regionId
        }}
      />
    </Animation>
  )
}