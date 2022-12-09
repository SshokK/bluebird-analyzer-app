import type {FC} from "react";
import React from 'react';
import {CardsContainer, ErrorBoundary, Grid, List, Separator} from "components";
import {RegionProxies} from "./elements";
import {
  useRegionalProxiesActions,
  useRegionalProxiesData,
  useRegionalProxiesHandlers,
  useRegionalProxiesMutations,
  useRegionalProxiesQueries
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
        isWrapDisabled
        classNames={{
          cardsContainer: 'BB-regional-proxies'
        }}
      >
        <Grid isContainer isWrapDisabled>
          <Grid isChild xs={4}>
            <List
              primaryActions={regionsActions}
              options={queries.fetchRegions.data}
              selectedOptionKeys={formattedData.regionId ? [formattedData.regionId] : []}
              onSelectedOptionsChange={handlers.handleSelectedRegionOptionChange}
            />
          </Grid>
          <Separator isVertical>
            Proxies
          </Separator>
          <Grid isChild xs={7} isShrinkDisabled>
            <RegionProxies regionId={formattedData.regionId} />
          </Grid>
        </Grid>
      </CardsContainer>
    </ErrorBoundary>
  )
}