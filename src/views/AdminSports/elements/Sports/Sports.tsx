import type {FC} from "react";
import type {SportsProps} from "./Sports.types";

import React from 'react';
import {CardsContainer, Chiclet} from "components";
import {useSportsData, useSportsHandlers, useSportsQueries} from "./hooks";

export const Sports: FC<SportsProps> = ({ sportFamilyId }) => {
  const { formattedData } = useSportsData();

  const queries = useSportsQueries({
    props: {
      sportFamilyId
    }
  });

  const handlers = useSportsHandlers();

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
        >
          {sport.name}
        </Chiclet>
      ))}
    </CardsContainer>
  )
}