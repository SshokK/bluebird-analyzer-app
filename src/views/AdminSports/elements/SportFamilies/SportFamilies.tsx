import React from "react";
import {Button, Card, CardsContainer} from "components";
import {useSportFamiliesData, useSportFamiliesQueries} from "./hooks";
import {AddSportFamilyModal} from "./elements";

export const SportFamilies = () => {
  const { localState, localActions } = useSportFamiliesData();

  const queries = useSportFamiliesQueries();

  return (
    <CardsContainer
      title="Sport families"
      isAnimated
      isLoading={queries.fetchSportFamilies.isLoading}
    >
      {queries.fetchSportFamilies.data?.map(sportFamily => (
        <Card key={sportFamily.id}>
          {sportFamily.name}
        </Card>
      ))}
      <Button onClick={() => localActions.setIsAddModalOpen(true)}>
        + Add sport family
      </Button>
      <AddSportFamilyModal
        isOpen={localState.isAddModalOpen}
        onClose={() => localActions.setIsAddModalOpen(false)}
      />
    </CardsContainer>
  )
}