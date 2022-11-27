import React from "react";
import {
  Actions,
  CardsContainer,
  Chiclet
} from "components";
import {
  useSportFamiliesData,
  useSportFamiliesHandlers,
  useSportFamiliesActionsConfig,
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
    <CardsContainer
      title="Sport families"
      isAnimated
      isLoading={
        queries.fetchSportFamilies.isLoading ||
        mutations.deleteSportFamily.isLoading
      }
    >
      {queries.fetchSportFamilies.data?.map(sportFamily => (
        <Chiclet
          key={sportFamily.id}
          isDeletable
          isSelected={formattedData.sportFamilyId === sportFamily.id}
          onClick={handlers.handleSportFamilyClick(sportFamily.id)}
          onDelete={handlers.handleSportFamilyDelete(sportFamily.id)}
        >
          {sportFamily.name}
        </Chiclet>
      ))}
      <Actions actions={actionsConfig}/>
    </CardsContainer>
  )
}