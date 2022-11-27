import type {FC} from "react";
import type {SportsProps} from "./Sports.types";

import React from 'react';
import { Actions, CardsContainer, Chiclet} from "components";
import {useSportsActionsConfig, useSportsData, useSportsHandlers, useSportsMutations, useSportsQueries} from "./hooks";

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
      isLoading={
        queries.fetchSportFamily.isLoading ||
        queries.fetchSports.isLoading
      }
    >
      {queries.fetchSports.data?.map(sport => (
        <Chiclet
          key={sport.id}
          isDeletable
          isSelected={formattedData.sportId === sport.id}
          onClick={handlers.handleSportClick(sport.id)}
          onDelete={handlers.handleSportDelete(sport.id)}
        >
          {sport.name}
        </Chiclet>
      ))}
      <Actions actions={actionsConfig} />
    </CardsContainer>
  )
}