import type {FC} from "react";
import type {RegionProxiesProps} from "./RegionProxies.types";

import React from 'react';
import {Animation, ANIMATION_DIRECTION, ANIMATION_ORIENTATION, ANIMATION_TYPES, Table } from "components";
import {ANIMATION_DELAY, REGION_PROXIES_TABLE_COLUMNS} from "./RegionProxies.constants";
import {useRegionProxiesQueries} from "./hooks";

export const RegionProxies: FC<RegionProxiesProps> = ({
  regionId
}) => {
  const queries = useRegionProxiesQueries({
    props: {
      regionId
    }
  })

  return (
    <Animation
      type={ANIMATION_TYPES.GROW}
      shouldAppear={Boolean(regionId)}
      direction={ANIMATION_DIRECTION.LEFT}
      orientation={ANIMATION_ORIENTATION.HORIZONTAL}
      animationDelay={ANIMATION_DELAY}
    >
      <Table
        rows={queries.fetchProxies.data}
        columns={REGION_PROXIES_TABLE_COLUMNS}
        isLoading={queries.fetchProxies.isFetching}
      />
    </Animation>
  )
}