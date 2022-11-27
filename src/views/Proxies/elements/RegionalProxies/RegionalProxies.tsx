import type {FC} from "react";

import React from 'react';
import {CardsContainer, List, Separator} from "components";
import {RegionProxies} from "./elements";
import {
  useRegionalProxiesActions,
  useRegionalProxiesData,
  useRegionalProxiesHandlers,
  useRegionalProxiesQueries,
  useRegionalProxiesQueriesHandlers
} from "./hooks";
import './regional-proxies.scss';

export const RegionalProxies: FC = () => {
  const { formattedData } = useRegionalProxiesData();

  const regionsActions = useRegionalProxiesActions({
    formattedData
  });

  const queriesHandlers = useRegionalProxiesQueriesHandlers({
    formattedData
  })

  const queries = useRegionalProxiesQueries({
    onFetchRegionsSuccess: queriesHandlers.handleRegionsFetchSuccess
  });

  const handlers = useRegionalProxiesHandlers();

  return (
    <CardsContainer
      title="Regions"
      isLoading={queries.fetchRegions.isLoading}
      shouldDisableWrap
      classNames={{
        cardsContainer: 'BB-regional-proxies'
      }}
    >
      <List
        actions={regionsActions}
        options={queries.fetchRegions.data}
        selectedOptionKeys={formattedData.regionId ? [formattedData.regionId] : []}
        onSelectedOptionsChange={handlers.handleSelectedRegionChange}
        classNames={{
          list: 'BB-regional-proxies__list'
        }}
      />
      <Separator isVertical />
      <RegionProxies regionId={formattedData.regionId} />
    </CardsContainer>
  )
}