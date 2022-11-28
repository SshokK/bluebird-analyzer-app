import type {FC} from "react";

import React from 'react';
import {CardsContainer, ErrorBoundary, List, Separator} from "components";
import {RegionProxies} from "./elements";
import {
  useRegionalProxiesActions,
  useRegionalProxiesData,
  useRegionalProxiesHandlers,
  useRegionalProxiesQueries,
  useRegionalProxiesMutations
} from "./hooks";
import './regional-proxies.scss';

export const RegionalProxies: FC = () => {
  const { formattedData } = useRegionalProxiesData();

  const handlers = useRegionalProxiesHandlers({
    formattedData
  });

  const queries = useRegionalProxiesQueries({
    onFetchRegionsSuccess: handlers.handleRegionsFetchSuccess
  });

  const mutations = useRegionalProxiesMutations({
    onCreateRegionSuccess: handlers.handleRegionCreationSuccess,
    onUpdateRegionSuccess: handlers.handleRegionUpdateSuccess,
    onDeleteRegionSuccess: handlers.handleRegionDeletionSuccess
  });

  const regionsActions = useRegionalProxiesActions({
    formattedData,
    queries,
    mutations
  });

  return (
    <ErrorBoundary>
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
          onSelectedOptionsChange={handlers.handleSelectedRegionOptionChange}
          classNames={{
            list: 'BB-regional-proxies__list'
          }}
        />
        <Separator isVertical />
        <RegionProxies regionId={formattedData.regionId} />
      </CardsContainer>
    </ErrorBoundary>
  )
}