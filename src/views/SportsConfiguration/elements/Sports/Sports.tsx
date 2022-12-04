import type {FC} from "react";
import type {SportsProps} from "./Sports.types";

import React from 'react';
import {Actions, ACTIONS_ORIENTATIONS, CardsContainer, Chiclet, Grid, GRID_SPACING} from "components";
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
      shouldShowNoDataMessage={!queries.fetchSports.data?.length}
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
              orientation={ACTIONS_ORIENTATIONS.COLUMN}
            />
          </Grid>
          <Grid isChild isContainer spacing={GRID_SPACING.L}>
            {queries.fetchSports.data?.map(sport => (
              <Grid isChild>
                <Chiclet
                  key={sport.id}
                  isDeletable
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
    </CardsContainer>
  )
}