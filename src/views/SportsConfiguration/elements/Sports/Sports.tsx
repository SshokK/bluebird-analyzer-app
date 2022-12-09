import type {FC} from "react";
import type {SportsProps} from "./Sports.types";

import React from 'react';
import {Actions, GRID_DIRECTION, CardsContainer, Chiclet, Grid, GRID_SPACING} from "components";
import {useSportsActionsConfig, useSportsData, useSportsHandlers, useSportsMutations, useSportsQueries} from "./hooks";
import {ANIMATION_DELAY} from "./Sports.constants";

export const Sports: FC<SportsProps> = ({ sportFamilyId }) => {
  const { formattedData } = useSportsData();

  const queries = useSportsQueries({
    props: {
      sportFamilyId
    }
  });

  const mutations = useSportsMutations();

  const handlers = useSportsHandlers({
    formattedData,
    mutations
  });

  const actionsConfig = useSportsActionsConfig({
    queries,
    formattedData,
    onAdd: handlers.handleModalAddModalSubmit,
    onEdit: handlers.handleModalEditModalSubmit
  })

  return (
    <CardsContainer
      title={queries.fetchSportFamily.data?.name}
      isAnimated
      shouldShowNoDataMessage={!queries.fetchSports.data?.results?.length}
      isFullHeight
      animationDelay={ANIMATION_DELAY}
      isLoading={
        queries.fetchSportFamily.isLoading ||
        queries.fetchSports.isLoading
      }
    >
      <Grid
        isContainer
        spacing={GRID_SPACING.L}
      >
        <Grid
          isChild
          isContainer
          xs={12}
          spacing={GRID_SPACING.L}
          isWrapDisabled
        >
          <Grid isChild>
            <Actions
              actions={actionsConfig}
              direction={GRID_DIRECTION.COLUMN}
            />
          </Grid>
          <Grid isChild>
            <Grid isContainer spacing={GRID_SPACING.L}>
              {queries.fetchSports.data?.results?.map(sport => (
                <Grid key={sport.id} isChild>
                  <Chiclet
                    isDeletable
                    isClickable
                    isSelected={formattedData.sportId === sport.id}
                    onClick={handlers.handleSportClick(sport.id)}
                    onDelete={handlers.handleSportDelete(sport.id)}
                  >
                    {sport.name}
                  </Chiclet>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardsContainer>
  )
}