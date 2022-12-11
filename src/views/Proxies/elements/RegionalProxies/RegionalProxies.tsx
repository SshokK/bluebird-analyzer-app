import type {FC} from "react";

import React from 'react';
import {ANIMATION_TIMING} from "./RegionalProxies.constants";
import {CardsContainer, ErrorBoundary, Grid, List, Separator} from "components";
import {RegionProxies} from "./elements";
import {
  useRegionalProxiesActions,
  useRegionalProxiesData,
  useRegionalProxiesHandlers,
  useRegionalProxiesMutations,
  useRegionalProxiesQueries
} from "./hooks";

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
        isFullHeight
        isAnimated
        animationTiming={ANIMATION_TIMING}
      >
        <Grid isContainer isWrapDisabled>
          <Grid isChild xs={3}>
            <List
              primaryActions={regionsActions}
              options={queries.fetchRegions.data}
              selectedOptionKeys={formattedData.regionId ? [formattedData.regionId] : []}
              onSelectedOptionsChange={handlers.handleSelectedRegionOptionChange}
            />
          </Grid>
          <Grid isChild xs isShrinkDisabled>
            <Separator isVertical>
              Proxies
            </Separator>
          </Grid>
          <Grid isChild xs={8} isShrinkDisabled>
            <RegionProxies regionId={formattedData.regionId} />
          </Grid>
        </Grid>
      </CardsContainer>
    </ErrorBoundary>
  )
}