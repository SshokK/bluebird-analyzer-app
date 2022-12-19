import React from "react";

import {Actions, Container, Chiclet, Grid, GRID_DIRECTION, GRID_HEIGHT, GRID_SPACING} from "components";
import {
  useSportFamiliesActionsConfig,
  useSportFamiliesData,
  useSportFamiliesHandlers,
  useSportFamiliesMutations,
  useSportFamiliesQueries
} from "./hooks";

export const SportFamilies = () => {
  const { formattedData } = useSportFamiliesData();

  const queries = useSportFamiliesQueries();

  const mutations = useSportFamiliesMutations();

  const handlers = useSportFamiliesHandlers({
    formattedData,
    mutations
  });

  const actionsConfig = useSportFamiliesActionsConfig({
    queries,
    formattedData,
    onAdd: handlers.handleModalAddModalSubmit,
    onEdit: handlers.handleModalEditModalSubmit
  })

  return (
    <Container
      title="Sport families"
      isAnimated
      isFullHeight
      isLoading={
        queries.fetchSportFamilies.isLoading ||
        mutations.deleteSportFamily.isLoading
      }
    >
      <Grid
        isContainer
        spacing={GRID_SPACING.L}
        height={GRID_HEIGHT.M}
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
          <Grid isChild shouldSetOverflowAuto>
            <Grid isContainer spacing={GRID_SPACING.L}>
              {queries.fetchSportFamilies.data?.map(sportFamily => (
                <Grid key={sportFamily.id} isChild>
                  <Chiclet
                    isDeletable
                    isClickable
                    isSelected={formattedData.sportFamilyId === sportFamily.id}
                    onClick={handlers.handleSportFamilyClick(sportFamily.id)}
                    onDelete={handlers.handleSportFamilyDelete(sportFamily.id)}
                  >
                    {sportFamily.name}
                  </Chiclet>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}