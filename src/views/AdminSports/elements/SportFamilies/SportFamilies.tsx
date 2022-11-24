import React from "react";
import {Button, Chiclet, CardsContainer} from "components";
import {AddSportFamilyModal} from "./elements";
import {
  useSportFamiliesData,
  useSportFamiliesHandlers,
  useSportFamiliesMutations,
  useSportFamiliesQueries
} from "./hooks";

export const SportFamilies = () => {
  const { localState, localActions, formattedData } = useSportFamiliesData();

  const queries = useSportFamiliesQueries();

  const mutations = useSportFamiliesMutations();

  const handlers = useSportFamiliesHandlers({
    localActions
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
          onDelete={() => mutations.deleteSportFamily.mutateAsync([sportFamily.id])}
        >
          {sportFamily.name}
        </Chiclet>
      ))}
      <Button onClick={handlers.handleAddModalToggle(true)}>
        + Add sport family
      </Button>
      <AddSportFamilyModal
        isOpen={localState.isAddModalOpen}
        onClose={handlers.handleAddModalToggle(false)}
      />
    </CardsContainer>
  )
}